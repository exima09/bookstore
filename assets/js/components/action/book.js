import { get } from '../utils/requests'
import types from '../actionType/book'

function fetchCharacters() {
    return dispatch => get('/api/characters?noLimit')
        .then((response) => {
            dispatch({
                type: types.CHARACTER_LIST,
                payload: response.data.data,
            })
        })
}

function filterCharacters(phrase) {
    return dispatch =>
        dispatch({
            type: types.FILTER_CHARACTER,
            payload: phrase,
        })
}

export default {
    fetchCharacters,
    filterCharacters,
}
