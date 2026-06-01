import axios from "axios"

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const api_key = import.meta.env.VITE_API_KEY

const responseData = (promise) => promise.then(response => response.data)

const getWeather = (lat, lon) => responseData(
    axios.get(baseUrl + `?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
)

export default { getWeather }