import React from 'react'
import Form from '../Form/bookForm';
import { fetchBook } from '../action/book';

export default class BookEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            book: {}
        }
    }

    componentDidMount() {
        fetchBook(this.props.match.params.bookId)
            .then((data) => {
                this.setState(state => {
                    state.book = data.book;

                    return state;
                });
            })
            .catch((err) => {
                console.error('err', err);
            });

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}
                      book={this.state.book}
                      history={this.props.history}/>
            </div>
        );
    }
};
