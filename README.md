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
```
cd weather-app

```
-This command changes the current working directory to the cloned weather-app directory.
### 3.API Key:
Obtain an API key from OpenWeather.
Replace the placeholder variable in public/config.js with your own API key:
js
Copy code
const API_KEY = "9a518d458c06ba74aa823051c4bbfe3d";
Run the application:
Open the index.html file in a browser to view the application.
