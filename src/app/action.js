export const FETCH_BOOKS_PENDING = 'FETCH_BOOK_PENDING'; 
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOK_SUCCESS'; 
export const FETCH_BOOKS_ERROR = 'FETCH_BOOK_ERROR';

export function fetchBooksPending() {
    return {
        type: FETCH_BOOKS_PENDING
    }
}

export function fetchBooksSuccess(books) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        books: books
    }
}

export function fetchBooksError(error){
    return {
        type: FETCH_BOOKS_ERROR,
        error: error
    }
}