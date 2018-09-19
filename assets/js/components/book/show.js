import React from 'react';
import {Link} from 'react-router-dom'
import {get, post} from "../utils/requests";

export default class Show extends React.Component {
    constructor(props) {
        super(props);

    }

    removeBook(idDel) {
        console.log('props', idDel);
        post('/book/delete', {
            idDelete: idDel
        })
        .then(res => {
            console.log('RES',res);
            console.log('RES_DATA',res.data);
            this.props.componentDidMount();
        })
    }

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
                        <button className="btn btn-light">Edit</button>
                        <button className="btn btn-light" onClick={(event) => this.removeBook(this.props.book.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
