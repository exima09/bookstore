import React from 'react';
import BookView from './show'
//import {get} from '../utils/requests'
import axios from 'axios'

export default class BooksList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        // get(`http://localhost:8001/book/list`).then(res => {
        //     const books = res.data;
        //     this.setState({ books });
        // });
        axios.get(`http://localhost:8001/book/list`)
            .then(res => {
                const books = res.data;
                this.setState({
                    books: books.books
                });
            })
    }

    componentWillUnmount() {

    }

    render() {
        if (this.state.books.length === 0) {
            return <React.Fragment/>
        }
        const bookListing = this.state.books.map(book => {
            if (book.onStock === true) {
                return <BookView book={book}/>
            }
        });
        return (
            <div>
                {bookListing}
            </div>
        )
    }
}
