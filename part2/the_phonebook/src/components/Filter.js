const Filter = ({ searchTerm, handleTermChange }) => {
    return (
        <div>
            Search: <input value={searchTerm} onChange={handleTermChange} />
        </div>
    )
    
}

export default Filter