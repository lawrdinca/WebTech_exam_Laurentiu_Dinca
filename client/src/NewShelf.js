const NewShelf = () => {
    return (
        <div className = "formShelf">
            <form action =' ' id ='forms'>
            <h2>Add a shelf</h2>
            <label htmlFor='description'>Description: </label>
            <input name = 'description' className='description' id='description' type ='text'></input>
            <label htmlFor='date'>Date:</label>
            <input name = 'date' className='date' id='date' type='time'></input>
            </form>
        </div>);
}


export default NewShelf;