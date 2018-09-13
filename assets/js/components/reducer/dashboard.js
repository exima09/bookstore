import types from '../actionType/dashboard'

const initialState = {
    books: [],
};

function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case types.DASHBOARD_BOOKS:
            return {
                ...state,
                books: action.payload,
            };
        default:
            return state
    }
}

export default dashboardReducer
