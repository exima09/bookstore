import { bookConstants } from '../_constants';
import { bookService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export default {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch(request());

        bookService.getAll()
            .then(
                books => dispatch(success(books)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: bookConstants.GETALL_REQUEST } }
    function success(books) { return { type: bookConstants.GETALL_SUCCESS, books } }
    function failure(error) { return { type: bookConstants.GETALL_FAILURE, error } }
}
