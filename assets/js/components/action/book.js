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

function editBook(id, data) {
    return (
        post('/book/edit/'+id, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log('RES',res);
            console.log('RES_DATA',res.data);
        }).catch(err => err)
    )
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
