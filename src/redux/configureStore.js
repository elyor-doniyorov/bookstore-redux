import { combineReducers, createStore } from 'redux';
import books from './books/books';

const rootreducer = combineReducers({ books });

const store = createStore((state, action) => rootreducer(state, action));

export default store;
