const NewBook = () => {
    return(
        <div className = "formBook">
            <form action = ' ' id = 'formB'>
                <h3>Add a book</h3>
                <label htmlFor='vs_id'>VS_ID</label>
                <select>
                </select>
                <label htmlFor='title'>Title</label>
                <input name = 'title' className='title' id='title' type='text'></input>
                <label htmlFor='genre'>Genre</label>
                <select name='Genre' className='Genre' id='Genre'>
                    <option value='comedy'>Comedy</option>
                    <option value='drama'>Drama</option>
                    <option value='tragedy'>Tragedy</option>
                    <option value='romance'>Romance</option>
                    <option value='adventure'>Adventure</option>
                </select>
                <label htmlFor='url'>URL:</label>
                <input name='url' className='url' id='url' type='text'></input>
            </form>
        </div>
    );
}

export default NewBook;