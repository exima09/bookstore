import {get, post} from '../utils/requests'

function deleteBook(id) {
    return post('/book/delete', {
        idDelete: id
    })
    .then(res => {
        console.log('RES',res);
        console.log('RES_DATA',res.data);
    })
    .catch(err => {
        console.log('ERROR DELETE',err);
    });
}

function editBook(id) {
    return get('/book/'+id, {
        method: 'GET'
    })
    .then(res => res.json())
    .catch(err => err);
}

function fetchBook(id) {
    return get('/book/'+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.data)
    .catch(err => err);

}
export {deleteBook, editBook, fetchBook}
