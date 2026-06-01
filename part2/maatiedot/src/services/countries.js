import axios from "axios"

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const responseData = (promise) => promise.then(response => response.data)

const getAll = () => responseData(
    axios.get(baseUrl + 'all')
)

const getCountry = (country) => responseData(
    axios.get(baseUrl + 'name/' + country)
)

export default { getAll, getCountry }