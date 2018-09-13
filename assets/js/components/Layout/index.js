import React from 'react'
import PropTypes from 'prop-types'
import { history as historyPropTypes } from 'history-prop-types'
import { Route, Switch } from 'react-router-dom'
import Books from '../book/list'
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
                                <Route path="/book/" component={Books} />
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}


export default Main
