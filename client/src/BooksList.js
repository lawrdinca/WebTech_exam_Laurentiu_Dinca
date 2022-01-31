import {Link} from 'react-router-dom';

const BooksList = ({books}) => {
    return(
        <div className='booksList'>
            {
                books.map((book) => (
                    <div className='book-preview' key={book.id} >
                        <Link to={'/home'}>
                            <table>
                                <tr>
                                    <th>Genre</th>
                                    <th>URL</th>
                                    <th>SHELF</th>
                                </tr>
                                <tr>
                                    <td>{book.Genre}</td>
                                    <td>{book.Url}</td>
                                    <td>{book.ShelfID}</td>
                                </tr>
                            </table>
                        </Link>
                    </div> 
                ))}
        </div>);
}

export default BooksList;