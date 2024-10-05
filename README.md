# Weather App

This is a weather application that allows users to check the 5-day weather forecast for any city. Users can choose to view the temperature in either Celsius or Fahrenheit. The application fetches data from the OpenWeather API and displays detailed weather information, such as temperature, humidity, and wind speed.

## Table of Contents
- [Features](#features)
- [Setup and Run Instructions](#setup-and-run-instructions)
- [Usage](#usage)
- [Assumptions and Decisions](#assumptions-and-decisions)
- [Screenshots](#screenshots)
- [API Reference](#api-reference)
- [Technologies Used](#technologies-used)

## Features

### Feature 1: 5-Day Weather Forecast
- Displays the 5-day weather forecast for any entered city, with options to switch between Celsius and Fahrenheit units.

### Feature 2: Responsive Design
- The application is responsive, adjusting its layout for both mobile and desktop views.

### Additional Features:
- Displays an error message if the city is not found or if the API request fails.

## Setup and Run Instructions

### 1.Clone the repository:
```bash
git clone https://github.com/chandusreeram-9399/weather-app.git
```

### 2.Navigate to the project directory:
-This command changes the current working directory to the cloned weather-app directory.
```
cd weather-app

```

### 3.API Key:
i. **Obtain an API key from OpenWeather**:
   - Visit [OpenWeather](https://openweathermap.org/api) to sign up and get your API key.

ii. **Replace the placeholder variable in `config.js` with your own API key**:
```
const API_KEY = "9a518d458c06ba74aa823051c4bbfe3d"; // Insert your API key here
```
##3.Usage

### Feature 1: Viewing the 5-Day Weather Forecast
1. **Enter a city name in the input field**: Type the name of the city for which you want to see the weather.
2. **Select the temperature unit (Celsius or Fahrenheit)**: Choose your preferred temperature unit from the dropdown menu.
3. **Click the "Get Weather" button**: Press the button to retrieve and display the 5-day weather forecast for the entered city.

### Interaction:
- The user interacts with the app through the input form. The result section updates dynamically based on the input.
- If the city is invalid or the API request fails, an appropriate error message will be displayed.

