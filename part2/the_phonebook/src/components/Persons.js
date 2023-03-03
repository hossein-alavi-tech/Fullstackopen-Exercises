import personsService from '../services/persons'

const Persons = ({ persons, searchTerm, setPersons }) => {

    const handleDelete = (id, name) => {
        if (window.confirm(`Delete ${name}?`))
            personsService.deleteItem(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                })
    }


    return (
        <div>
            {persons.map(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()) ?
                <div key={person.id}>
                    <p>{person.name} {person.number}</p>
                    <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
                </div> :
                null)}
        </div>
    )

}

export default Persons
