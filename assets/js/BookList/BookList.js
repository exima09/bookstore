import React from 'react';
import { connect } from 'react-redux';
import bookActions from '../_actions/book.actions';
import {Link} from "react-router-dom";

class BookList extends React.Component {
    componentDidMount() {
        this.props.getAll();
    }

    render() {
        const { book, books } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                {books.loading && <em>Loading books...</em>}
                {books.error && <span className="text-danger">ERROR: {books.error}</span>}
                {books.items &&
                <ul>
                    {books.items.books.map((book, index) =>
                        <li key={book.id}>
                            {book.name + ' ' + book.author}
                        </li>
                    )}
                </ul>
                }
                <p>
                    <Link to="/">Back</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { books, authentication } = state;
    const { book } = authentication;
    return {
        book,
        books
    };
}

const mapDispatchToProps = {
    getAll: bookActions.getAll,
};

const connectedBookList = connect(mapStateToProps, mapDispatchToProps)(BookList);
export { connectedBookList as BookList };
