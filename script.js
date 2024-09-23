document.getElementById("weatherForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const city = document.getElementById("city").value;
    const unit = document.getElementById("unit").value; // Get selected unit (Celsius or Fahrenheit)
    const apiKey = config.API_KEY;

    // OpenWeather 5-day/3-hour forecast API endpoint
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`;

    fetch(forecastUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeatherForecast(data, unit);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weatherResult").innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
        });
});

function displayWeatherForecast(data, unit) {
    const weatherDiv = document.getElementById("weatherResult");
    const tempUnit = unit === "metric" ? "°C" : "°F"; // Choose unit symbol based on the selected unit
    const speedUnit = unit === "metric" ? "m/s" : "mph"; // Wind speed unit

    let weatherHtml = "<h2>5-Day Weather Forecast</h2>";

    const dailyForecasts = {};

    data.list.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if (!dailyForecasts[date]) {
            dailyForecasts[date] = [];
        }

        dailyForecasts[date].push(forecast);
    });

    Object.keys(dailyForecasts).forEach(date => {
        const dayForecasts = dailyForecasts[date];
        const forecast = dayForecasts[0];
        const weatherIcon = forecast.weather[0].icon;

        weatherHtml += `
            <div>
                <h3>Weather on ${date}</h3>
                <p><i class="fas fa-thermometer-half"></i> Temperature: ${forecast.main.temp} ${tempUnit}</p>
                <p><i class="fas fa-tint"></i> Humidity: ${forecast.main.humidity}%</p>
                <p><i class="fas fa-wind"></i> Wind Speed: ${forecast.wind.speed} ${speedUnit}</p>
                <p><i class="fas fa-cloud-sun"></i> Weather Description: ${forecast.weather[0].description}</p>
                <img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="Weather Icon">
            </div>
        `;
    });

    weatherDiv.innerHTML = weatherHtml;
}
