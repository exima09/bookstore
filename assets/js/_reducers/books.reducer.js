import { bookConstants } from '../_constants';

export function books(state = {}, action) {
    switch (action.type) {
        case bookConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case bookConstants.GETALL_SUCCESS:
            return {
                items: action.books
            };
        case bookConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}
