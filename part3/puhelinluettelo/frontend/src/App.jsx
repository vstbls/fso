import { useState, useEffect } from 'react'
import numberService from './services/numbers'
import Person from './Person'
import Filter from './Filter'
import FormField from './FormField'
import Notification from './Notification'
import Error from './Error'

import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [phoneFilter, setPhoneFilter] = useState('')
  const [notificationMsg, setNotificationMsg] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    numberService
      .getAll()
      .then(numbers => {
        setPersons(numbers)
      })
  }, [])

  const displayNotif = (msg) => {
    setNotificationMsg(msg)
    setTimeout(() => {
      setNotificationMsg(null)
    }, 5000)
  }

  const displayError = (msg) => {
    setError(msg)
    setTimeout(() => {
      setError(null)
    }, 5000)
  }

  const updateNumber = (old) => {
    const updatedPerson = {name: newName, number: newNumber, id: old.id}
    numberService
      .update(old.id, updatedPerson)
      .then(response => {
        setPersons(
          persons
          .filter(p => p.id != old.id)
          .concat(updatedPerson)
        )
        setNewName('')
        setNewNumber('')
        displayNotif(`updated the number of ${updatedPerson.name} !!!!!!!!!!!!!!!!!!!!!!YES!!!!!!!!!!!!`)
      })
      .catch(err => {
        displayError(`some error.. OCCURRED when updaing ${updatedPerson.name}????? mb refresh yr page....?`)
        numberService
          .getAll()
          .then(numbers => {
            setPersons(numbers)
          })
      })
  }

  const addNumber = (event) => {
    event.preventDefault()
    const foundPerson = persons.find(person => person.name === newName)
    if (foundPerson) {
      if (!window
        .confirm(`${newName} is already in the phonebook...!! Do u.. wanna replace them.!???????????`)
      ) {
        return
      }
      return updateNumber(foundPerson)
    }
    const newPerson = {name: newName, number: newNumber}
    numberService
      .create(newPerson)
      .then(response => {
        const responsePerson = {
          name: response.name,
          number: response.number,
          id: response.id
        }
        setPersons(persons.concat(responsePerson))
        displayNotif(`SUCCEFULLY added ${responsePerson.name}`)
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log(error.response.data)
        displayError(`the validation failed........ ${error.response.data.error}`)
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setPhoneFilter(event.target.value)
  }

  const removePerson = (person) => {
    if (!window.confirm(`Delete ${person.name}?`)) {
      return
    }
    numberService
      .remove(person.id)
      .then(response => {
        setPersons(persons.filter(p => p.id != person.id))
        displayNotif(`We have removed succefluy${person.name} from the system.......................... `)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification msg={notificationMsg} />
      <Error err={error} />
      <Filter filter={phoneFilter} handler={handleFilterChange} />
      <h2>Add entry</h2>
      <form onSubmit={addNumber}>
        <FormField label={'name'} value={newName} onChange={handleNameChange} />
        <FormField label={'number'} value={newNumber} onChange={handleNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons
        .filter(person => person.name.toLowerCase().includes(phoneFilter.toLowerCase()))
        .map(person => <Person person={person} key={person.name} onClick={removePerson} />)
      }
    </div>
  )

}

export default App