import { useState } from 'react'
import personsService from '../services/persons'

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const addContact = (event) => {
        event.preventDefault()
        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} is already added to the phonebook.`)
            return
        }
        personsService
            .create({ name: newName, number: newNumber })
            .then(response => {
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
            })
    }
    return (
        <form onSubmit={addContact}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm