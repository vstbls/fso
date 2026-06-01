import { useState, useEffect } from 'react'
import weatherService from './services/weather'

const CountryDetails = ({country}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        weatherService
          .getWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
          .then(data => {
            setWeather(data)
          })
      }, [])

    if (!weather) return null

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>her Capital is {country.capital[0]}!</p>
            <p>occupation points: {country.area}</p>
            <h2>AND SHE SPEAKS:</h2>
            <ul>
                {Object.entries(country.languages).map(([key, val]) => {
                    return <li key={val}>some {val}....</li>
                })}
            </ul>
            <img src={country.flags.png} />
            <h1>{country.capital[0]} nationals are experiencing :</h1>
            <p>a HEAT of {weather.main.temp} Celsius</p>
            <p>a weather icon like...:</p>
            <img src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png` } />
            <p>a wind whispering at {weather.wind.speed} meters EVERY second</p>
        </div>
    )
}

export default CountryDetails