import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BooksList from '../book/bookList'
import Navbar from './navbar'
import Dashboard from '../dashboard'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 col-lg-4 ml-sm-auto col-lg-10 pt-3 px-4 border-dark">
                        <Navbar />
                        </div>
                        <main role="main" className={'col-md-9 col-lg-2 ml-sm-auto col-lg-10 pt-3 px-4'}>
                            <Switch>
                                <Route exact path="/dashboard" component={Dashboard} />
                                <Route path="/books" component={BooksList}/>
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}


export default Main
