import React from 'react';

export default class Show extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                    <button className="btn btn-primary" onClick={() => this.props.addToOrder(this.props.book)}>Add to
                        Order
                    </button>
                </div>
            </div>
        )
    }
}
