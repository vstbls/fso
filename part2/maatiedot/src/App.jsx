import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './Filter'
import CountryList from './CountryList'
import CountryDetails from './CountryDetails'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(data => {
        setCountries(data)
      })
  }, [filter])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countryNames = countries.map(
    country => country.name.common
  ).filter(
    name => name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <Filter filter={filter} handler={handleFilterChange} />
      {
        countryNames.length === 1
        ? <CountryDetails country={
          countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))[0]
        } />
        : <CountryList countries={countryNames} />
      }
    </div>
  )
}

export default App