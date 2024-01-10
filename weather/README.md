# Simple Weather App

This is a simple React weather app that allows users to input a city name and retrieve current weather information using the OpenWeatherMap API.

## Topics Covered

1. **Functional Components:**
   - The `App` component is a functional component, indicating the use of React hooks.

2. **State Hook (`useState`):**
   - The `useState` hook is used to manage state variables (`city`, `weatherData`, and `error`) in the functional component.

3. **Effect Hook (`useEffect`):**
   - Although not currently used, the `useEffect` hook is commonly used for side effects in functional components, such as fetching data.

4. **Axios:**
   - The `axios` library is used for making HTTP requests. In this case, it's used to fetch weather data from the OpenWeatherMap API.

5. **Event Handling:**
   - Event handling is used for the `onChange` event of the input field and the `onClick` event of the button. These events trigger state updates and the `getWeatherData` function.

6. **Conditional Rendering:**
   - Conditional rendering is used to display error messages and weather data based on the state.

7. **CSS Styling:**
   - Inline styles are used to set the color of the error message.

8. **React Props:**
   - Although not explicitly shown in this code, React props are commonly used to pass data and functionality between components. In this code, all the state and functions are within the same component, so props aren't explicitly used.

## Usage

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Replace the `apiKey` variable with your OpenWeatherMap API key.
4. Run the app with `npm start`.
5. Enter a city name in the input field and click "Get Weather" to see the current weather information.

Feel free to explore and modify the code to suit your needs.
