const CountryDetails = ({country}) => (
    <div>
        <h1>{country.name.common}</h1>
        <p>her Capital is {country.capital[0]}!</p>
        <p>occupation points: {country.area}</p>
        <h2>AND SHE SPEAKS:</h2>
        <ul>
            {Object.entries(country.languages).map(([key, val]) => {
                return <li>{val}....</li>
            })}
        </ul>
        <img src={country.flags.png} />
    </div>
)

export default CountryDetails