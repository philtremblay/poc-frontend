import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { booksReducer, initialState } from './reducer';

const middlewares = [thunk];

export default createStore(booksReducer, initialState, applyMiddleware(...middlewares));
