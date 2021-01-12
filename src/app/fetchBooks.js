import axios from 'axios';
import {fetchBooksPending, fetchBooksSuccess, fetchBooksError} from './action'

function fetchBooks() {
    return dispatch => {
        dispatch(fetchBooksPending());
        axios.get(process.env.REACT_APP_BACKEND_API)
        .then(res => {
            dispatch(fetchBooksSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchBooksError(err))
        })
    }
}

export default fetchBooks;