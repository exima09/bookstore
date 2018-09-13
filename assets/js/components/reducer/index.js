import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import dashboardReducer from './dashboard'
import bookReducer from './book';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    book: bookReducer,
    form: formReducer,
    routing: routerReducer
});

export default rootReducer
