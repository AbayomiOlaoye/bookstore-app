import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import BooksRedux from './books/books';
import CategoryRedux from './categories/categories';

const reducers = combineReducers({
  Books: BooksRedux,
  Category: CategoryRedux,
});

const safe = configureStore({ reducer: reducers }, applyMiddleware(thunk));

export default safe;
