import { FETCH_BOOKS_ERROR, FETCH_BOOKS_PENDING, FETCH_BOOKS_SUCCESS } from "./action";

export const initialState = {
    pending: false,
    books: [],
    error: null
}

export function booksReducer(state=initialState, action) {
    switch(action.type){
        case FETCH_BOOKS_PENDING:
            console.log("Action pending");
            return {
                ...state,
                pending: true
            }
        case FETCH_BOOKS_SUCCESS:
            console.log("Action success");
            return {
                ...state,
                pending: false,
                books: action.books
            }
        case FETCH_BOOKS_ERROR:
            console.log("Action error");
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state
    }
}

export const getBooks = state => state.books;
export const getBooksPending = state => state.pending;
export const getBooksError = state => state.error;