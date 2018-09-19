import React from 'react';
import axios from 'axios';

export default class BookAdd extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            author: "",
            description: "",
            onStock: true,
            image: "",
            price: 0,
            editMode: false
        };
    }


    handleChange = (event) => {
        let newBook;

        if(event.target.name==="onStock") {
            this.setState({
                ...this.state,
                [event.target.name]: event.target.checked
            });
        } else {
            this.setState({
                ...this.state,
                [event.target.name]: event.target.value
            });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/book/add', {
            name: this.state.name,
            author: this.state.author,
            description: this.state.description,
            image: this.state.image,
            price: this.state.price,
            onStock: this.state.onStock
        } )
            .then(res => {
                console.log('RES',res);
                console.log('RES_DATA',res.data);
                return this.props.history.push('/books');
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h2>Add a book</h2>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book name" name="name" id="name" className="form-control"
                               onChange={this.handleChange} value={this.state.name}/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book author" name="author" id="author"
                               className="form-control"
                               onChange={this.handleChange} value={this.state.author}/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Book description" name="description" id="description"
                                  className="form-control"
                                  onChange={this.handleChange} value={this.state.description}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" id="onStock" name="onStock" className="form-check-input"
                               onChange={this.handleChange} value={this.state.onStock}/>
                        <label form="bookOnStock" className="form-check-label">On stock</label>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book image" name="image" id="image" className="form-control"
                               onChange={this.handleChange} value={this.state.image}/>
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Book price" name="price" id="price" className="form-control"
                               onChange={this.handleChange} value={this.state.price}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add/Edit</button>
                </form>
            </div>
        )
    }
}
