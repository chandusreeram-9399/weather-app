# Weather App

## Description
The Weather App is a simple web application that allows users to check the weather forecast for a specified city. Users can select their preferred temperature unit (Celsius or Fahrenheit) and view a 5-day weather forecast.

## Features
- Fetches real-time weather data from the OpenWeather API.
- Displays a 5-day weather forecast with temperature, humidity, wind speed, and weather description.
- User-friendly interface with responsive design.

## Technologies Used
- HTML
- CSS
- JavaScript
- OpenWeather API

## Setup Instructions

1. **Create Project Directory**:
   - Create a directory called `weatherapp`.

2. **Create Project Files**:
   - Inside `weatherapp`, create a `public` folder.
   - Inside the `public` folder, create the following files:
     - `style.css`
     - `script.js`
     - `config.js`
   - Place `index.html` in the root of the `weatherapp` directory.

3. **Set Up API Key**:
   - Sign up at [OpenWeather](https://openweathermap.org/) to get your API key.
   - In `public/config.js`, replace the placeholder with your actual API key.
   - Make sure `config.js` is included in your `.gitignore` file to keep your API key secure.

4. **Run the Application**:
   - Open `index.html` in your web browser directly, or use a local server (like the Live Server extension in VS Code) to run the application.
   - If using a local server, navigate to the appropriate URL (e.g., `http://localhost:5500/index.html`).
   - 
## Prerequisites
Before you begin, ensure you have met the following requirements:
- **Web Browser**: A modern web browser (e.g., Chrome, Firefox, Edge) installed on your computer.
- **Internet Connection**: Required to fetch weather data from the OpenWeather API.
- 
## Usage
- Enter the name of the city in the input field.
- Select the temperature unit (Celsius or Fahrenheit).
- Click the "Get Weather" button to retrieve the weather forecast.

## Notes
- The `config.js` file is included in `.gitignore` to protect your API key.
- Ensure that your browser allows requests to external APIs.

## Contributing
Feel free to fork the repository and submit a pull request if you want to contribute.



