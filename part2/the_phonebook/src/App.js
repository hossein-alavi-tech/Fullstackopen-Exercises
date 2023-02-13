import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])
  const [searchTerm, setSearchTerm] = useState('')

  const handleTermChange = (event) => {
    setSearchTerm(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleTermChange={handleTermChange} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} searchTerm={searchTerm} />
      ...
    </div>
  )
}

export default App