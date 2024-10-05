# City Weather Checker

This is a web application that allows users to check the 5-day weather forecast for a specified city. It uses HTML, CSS, and JavaScript for the frontend, and integrates with the OpenWeather API to fetch weather data.

## Table of Contents
* [Features](#features)
* [Setup and Run Instructions](#setup-and-run-instructions)
* [Usage](#usage)
* [Assumptions and Decisions](#assumptions-and-decisions)
* [Screenshots](#screenshots)
* [API Reference](#api-reference)
* [Technologies Used](#technologies-used)

## Features
* **City-based Weather Search**: Users can enter a city name to get weather information.
* **Temperature Unit Selection**: Users can choose between Celsius and Fahrenheit.
* **5-Day Forecast**: Displays a 5-day weather forecast for the selected city.
* **Detailed Weather Information**: Shows temperature, humidity, wind speed, and weather description for each day.
* **Weather Icons**: Displays appropriate weather icons for each forecast.

## Setup and Run Instructions
1. **Clone the repository:**
   ```
   git clone https://github.com/chandusreeram-9399/weather-app.git
   ```

2. **Navigate to the project directory:**
   ```
   cd weather-checker
   ```

3. **API Key:**
   * Obtain an API key from [OpenWeather](https://openweathermap.org/api).
   * Replace the placeholder API key in the `config.js` file:
     ```javascript
     
         API_KEY: '9a518d458c06ba74aa823051c4bbfe3d'
     
     ```

4. **Run the application:**
   * Open the `index.html` file in a web browser to view the application.

## Usage
* Enter the name of a city in the input field.
* Select the preferred temperature unit (Celsius or Fahrenheit).
* Click the "Get Weather" button to fetch and display the 5-day weather forecast.
* The forecast will show temperature, humidity, wind speed, weather description, and an icon for each day.

## Assumptions and Decisions
* **Single Page Application**: The app is designed as a single HTML page for simplicity.
* **API Key Security**: The API key is stored in a separate `config.js` file. In a production environment, this should be handled more securely.
* **Error Handling**: Basic error handling is implemented to inform users of any issues with data fetching.
* **Responsive Design**: The CSS is designed to be responsive, adapting to different screen sizes.

## Screenshots

## Screenshots
![Main Interface](images/main-interface.png)
*Main interface of the City Weather Checker*

![Weather Forecast](images/weather-forecast.png)
*Example of a 5-day weather forecast display*
## API Reference
* **OpenWeather API**:
  * **5-day/3-hour Forecast Endpoint**: 
    ```
    https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units={unit}
    ```
    This endpoint is used to fetch the 5-day weather forecast data.

## Technologies Used
* **Frontend**: 
  * HTML5
  * CSS3
  * JavaScript (ES6+)
* **APIs**: OpenWeather API
* **Other**: 
  * Font Awesome (for weather icons)
  * Fetch API for making HTTP requests
