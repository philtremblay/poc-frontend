import axios from 'axios';
import {fetchBooksPending, fetchBooksSuccess, fetchBooksError} from './action'

function fetchBooks() {
    return dispatch => {
        dispatch(fetchBooksPending());
        axios.get("http://localhost:8080/book")
        .then(res => {
            dispatch(fetchBooksSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchBooksError(err))
        })
    }
}

export default fetchBooks;