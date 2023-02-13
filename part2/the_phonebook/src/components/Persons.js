const Persons = ({ persons, searchTerm }) => {
    
    return (
        <div>
            {persons.map(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()) ? <p key={person.name}>{person.name} {person.number}</p> : null)}
        </div>
    )

}

export default Persons
