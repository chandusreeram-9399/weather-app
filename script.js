document.getElementById("weatherForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const city = document.getElementById("city").value;
    const date = document.getElementById("date").value;
    const unit = document.getElementById("unit").value; // Get selected unit (Celsius or Fahrenheit)
    const apiKey = config.API_KEY;

    if (date) {
        // Date input provided - fetch historical weather data
        const unixTimestamp = new Date(date).getTime() / 1000; // Convert date to UNIX timestamp

        // Step 1: Get city coordinates (latitude, longitude) using Geocoding API
        const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

        fetch(geocodeUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Geocoding API error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(geoData => {
                if (geoData.length === 0) {
                    throw new Error("City not found");
                }

                const { lat, lon } = geoData[0];

                // Step 2: Use One Call API for historical weather data
                const oneCallUrl = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${unixTimestamp}&appid=${apiKey}&units=${unit}`;

                return fetch(oneCallUrl);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`One Call API error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                displayWeatherData(data.current, unit); // Historical data is in 'current'
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                document.getElementById("weatherResult").innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
            });

    } else {
        // No date input - fetch current weather data
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

        fetch(currentWeatherUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                displayWeatherData(data, unit);
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                document.getElementById("weatherResult").innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
            });
    }
});

function displayWeatherData(data, unit) {
    const weatherDiv = document.getElementById("weatherResult");
    const tempUnit = unit === "metric" ? "°C" : "°F"; // Choose unit symbol based on the selected unit
    const speedUnit = unit === "metric" ? "m/s" : "mph"; // Wind speed unit

    // For current weather data
    if (data.name) {
        weatherDiv.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} ${tempUnit}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} ${speedUnit}</p>
            <p>Weather Description: ${data.weather[0].description}</p>
        `;
    } else {
        // For historical weather data
        weatherDiv.innerHTML = `
            <h2>Weather Data on Selected Date</h2>
            <p>Temperature: ${data.temp} ${tempUnit}</p>
            <p>Humidity: ${data.humidity}%</p>
            <p>Wind Speed: ${data.wind_speed} ${speedUnit}</p>
            <p>Weather Description: ${data.weather[0].description}</p>
        `;
    }
}