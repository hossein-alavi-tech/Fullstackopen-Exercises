import { useState } from 'react'
import personsService from '../services/persons'

const PersonForm = ({ persons, setPersons, setMessage }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const getIdByName = (name, contacts) => {
        const foundContact = contacts.find(contact => contact.name === name);
        return foundContact ? foundContact.id : false;
    }
    const addContact = (event) => {
        event.preventDefault()
        if (getIdByName(newName, persons)) {
            if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
                personsService
                    .update(getIdByName(newName, persons), { name: newName, number: newNumber })
                    .then(response => {
                        const updatedPersons = persons.map(person => person.id !== response.data.id ? person : response.data)
                        setPersons(updatedPersons)
                        setNewName('')
                        setNewNumber('')
                    })
            }
            return
        }
        personsService
            .create({ name: newName, number: newNumber })
            .then(response => {
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
                setMessage(`Added ${newName} to the phonebook.`)
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
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