import React, { Component } from 'react';
import {editBook} from "../action/book";

class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
            book: {}
        }
    }

    componentDidUpdate(){
        if(this.state.book.name===undefined)
        {
            this.setState({
                book: this.props.book
            })
        }

    }

    handleChange = (event) => {

        let newBook;

        if(event.target.name==="onStock") {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.checked
            };
        } else {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            };
        }
        console.log(newBook);
        this.setState({
            book: newBook
        });

    };

    handleSubmit = (e) => {
        e.preventDefault();
        editBook(this.state.book.id, this.state.book)
            .then(()=> {
                    return this.props.history.push('/books');
                }
            );
    }

    render() {
        return (
            <form name="blog_post" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div id="blog_post">
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="name">Book Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   name="name"
                                   id="name"
                                   onChange={this.handleChange}
                                   value={this.state.book.name}
                                   required="required"
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="author">Book Author</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="author"
                                   name="author"
                                   onChange={this.handleChange}
                                   value={this.state.book.author}
                                   required="required"
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="description">Book Description</label>
                        <div className="col-sm-10">
                            <textarea
                                   id="description"
                                   name="description"
                                   onChange={this.handleChange}
                                   value={this.state.book.description}
                                   required="required"
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox">
                                <label><input
                                            type="checkbox"
                                            id="onStock"
                                            name="onStock"
                                            onChange={this.handleChange}
                                            value={this.state.book.onStock}
                                            className="form-check-label" />Book On Stock</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="image">Book image</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="image"
                                   name="image"
                                   onChange={this.handleChange}
                                   value={this.state.book.image}
                                   required="required"
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="price">Book price</label>
                        <div className="col-sm-10">
                            <input type="number"
                                   id="price"
                                   name="price"
                                   onChange={this.handleChange}
                                   value={this.state.book.price}
                                   required="required"
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button type="submit"
                                    id="blog_post_submit"
                                    className="btn-default btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
};

export default Form
