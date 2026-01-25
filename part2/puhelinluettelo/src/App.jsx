import { useState } from 'react'
import Person from './Person'
import Filter from './Filter'
import FormField from './FormField'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [phoneFilter, setPhoneFilter] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook...!!`)
      return
    }
    setPersons(persons.concat({name: newName, number: newNumber}))
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

  return (
    <div>
      <h2>Phonebook</h2>
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
        .map(person => <Person person={person} key={person.name} />)
      }
    </div>
  )

}

export default App