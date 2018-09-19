import React from 'react';
import {Link} from 'react-router-dom'

export default class BookView extends React.Component {
    constructor(props) {
        super(props);

    }

    deleteHandler(i) {
        this.props.onDelete(i);
    };

    render() {
        if(this.props.book === undefined)
        {
            return (<div className="error">Brak książki</div>)
        }
        return (
            <div key={this.props.book.id} className="row bookView">
                <div className="col-sm-4">
                    <img className="img-thumbnail" src={this.props.book.image} width="75" height="100" alt={this.props.book.name}/><br />
                    <h6 className="mt-2">{this.props.book.genre}</h6>

                </div>
                <div className="col-sm-4">
                    #{this.props.book.id} <b>{this.props.book.name}</b><br/>
                    <i>{this.props.book.author}</i><br />
                    {this.props.book.description}<br />
                    <b><i>{this.props.book.price} EG</i></b>
                </div>
                <div className="col-sm-4">
                    <div className="btn-group" role="group" aria-label="Action button">
                        <button className="btn btn-light" onClick={() => this.props.addToOrder(this.props.book)}>Add to Order</button>
                        {this.props.match.path !== "/books/show/:bookId" &&
                            <Link className="btn btn-light" to={`/books/show/${this.props.book.id}`}>Show</Link>
                        }
                        {this.props.match.path === "/books/show/:bookId" &&
                            <Link className="btn btn-light" to={'/books'}>Back</Link>
                        }
                        <Link className="btn btn-light" to={`/books/edit/${this.props.book.id}`}>Edit</Link>
                        <button className="btn btn-light" onClick={() => this.deleteHandler(this.props.book.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
