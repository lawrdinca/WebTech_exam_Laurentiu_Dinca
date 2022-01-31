import React from 'react';
import BooksList from './BooksList';
import axios from 'axios';
class Home extends React.Component {
    state = {
        books: []
    }
    componentDidMount() {
        axios.get(`http://localhost:8000/books/`)
            .then(res => {
                const books = res.data;
                this.setState({ books });
            });
    };

    render() {
        return (
            <div className="home">
                <BooksList books={this.state.books} />
            </div>
        );
    }
}

export default Home;