import Country from './Country'

const CountryList = ({countries, setFilter}) => {
    if (countries.length === 0) {
        return (
            <p>zeeeeroooo (000000) results</p>
        )
    } else if (countries.length > 10) {
        return (
            <p>tooooooo manyyyyyy results??</p>
        )
    } else {
        return (
            <div>
                {countries.map(country => <Country name={country} setFilter={setFilter} key={country} />)}
            </div>
        )
    }
}

export default CountryList