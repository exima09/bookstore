import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { history } from '../helper/history';
import { alertActions } from '../action/alert.actions';
import BooksList from '../book/bookList'
import BooksAdd from '../book/bookAdd'
import Navbar from './navbar'
import { Dashboard } from '../dashboard'
import BookEdit from '../book/bookEdit'
import { PrivateRoute } from '../PrivateRoute';
import { LoginPage } from '../loginPage';


class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-md-9 col-lg-4 ml-sm-auto col-lg-10 pt-3 px-4 border-dark">
                        {/*<Navbar />*/}
                    </div>
                    <div className="col-sm-8 col-sm-offset-2">
                        {/*{alert.message &&*/}
                        {/*<div className={`alert ${alert.type}`}>{alert.message}</div>*/}
                        {/*}*/}
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={Dashboard} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/books/add" component={BooksAdd}/>
                                <Route path="/books/show/:bookId" component={BooksList}/>
                                <Route path="/books/edit/:bookId" component={BookEdit}/>
                                <Route path="/books" component={BooksList}/>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
