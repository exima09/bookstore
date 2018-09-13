import types from '../actionType/book'

const initialState = {
    books: [],
};

function bookReducer(state = initialState, action) {
    switch (action.type) {
        case types.BOOK_LIST:
            return {
                ...state,
                books: action.payload,
            };
        case types.BOOK_ADD:
            return {
                ...state,
                name: action.name,
                author: action.author,
                description: action.description,
                price: action.price,
                image: action.image,
                genre: action.genre,
                onStock: action.onStock
            }
        default:
            return state
    }
}

export default bookReducer
