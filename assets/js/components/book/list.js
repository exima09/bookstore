import React from 'react';

export default class List extends React.Component {

    constructor(props){
        super(props);
    }


    render(){
        const bookListing = this.props.books.map(book=> {
            if(book.onStock===true){
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
