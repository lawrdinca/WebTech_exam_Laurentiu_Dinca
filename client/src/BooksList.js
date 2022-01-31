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
                                    <td>{book.literary_genre}</td>
                                    <td>{book.url}</td>
                                    <td>{book.vs_id}</td>
                                </tr>
                            </table>
                        </Link>
                    </div> 
                ))}
        </div>);
}

export default BooksList;