import React from 'react';
import BookView from './bookView'
import {get} from '../utils/requests'
import {deleteBook} from '../action/book'

export default class BooksList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        get(`http://localhost:8001/book/list`)
            .then(res => {
                const books = res.data;
                this.setState({
                    books: books.books
            });
        });
    }

    onDelete(id) {
        deleteBook(id)
            .then((data) => {
                let books = this.state.books.filter((book) => {
                    return id !== book.id;
                });
                this.setState(state => {
                    state.books = books;
                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    }


    componentWillUnmount() {

    }

    render() {
        if(this.state.books.length === 0) {
            return <React.Fragment/>
        }
        if(this.props.match.params.bookId !==undefined) {
            return <BookView book={this.state.books[this.props.match.params.bookId-1]} match={this.props.match}/>
        }
        const bookListing = this.state.books.map(book => {
            if (book.onStock === true) {
                return <BookView book={book} match={this.props.match} onDelete={this.onDelete.bind(this)}/>
            }
        });
        return (
            <div className="row">
                <div className="col-sm-5">
                 </div>
                <div className="col-sm-6">
                {bookListing}
                </div>
            </div>
        )
    }
}
