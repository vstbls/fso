import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const responseData = (promise) => promise.then(response => response.data)

const getAll = () => responseData(
    axios.get(baseUrl)
)

const create = newObject => responseData(
    axios.post(baseUrl, newObject)
)

const update = (id, newObject) => responseData(
    axios.put(`${baseUrl}/${id}`, newObject)
)

const remove = id => axios.delete(`${baseUrl}/${id}`)

export default { getAll, create, update, remove }