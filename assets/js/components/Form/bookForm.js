import React, { Component } from 'react';

class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            author: props.author,
        }
    }
    // componentWillReceiveProps(props) {
    //     this.setState(props);
    // }
    componentDidUpdate(prevProps){
        if(prevProps.name !== this.props.name)
        {
            this.setState({
                name: this.props.name
            })
        }
    }
    handleChange(event) {
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
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form name="blog_post" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div id="blog_post">
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="name">Book Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="name"
                                   name="name"
                                   onChange={this.handleChange}
                                   value={this.state.name}
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
                                   value={this.state.author}
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
