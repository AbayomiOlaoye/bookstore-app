import { configureStore, combineReducers } from '@reduxjs/toolkit';
import BooksRedux from './books/books';
import CategoryRedux from './categories/categories';

const reducers = combineReducers({
  Books: BooksRedux,
  Category: CategoryRedux,
});

const store = configureStore({ reducer: reducers });

export default store;
