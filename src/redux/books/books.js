import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

const prevState = [];
const source = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BoLpCLs90yg1VqJcibSz/books';

/* Actions Logic */

// Fetch Books
const getBooks = createAsyncThunk(GET_BOOK, async (post, { dispatch }) => {
  const res = await fetch(source);
  const data = await res.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  dispatch({
    type: GET_BOOK,
    books,
  });
});

// Add Book
const addBook = createAsyncThunk(ADD_BOOK, async (newBook, { dispatch }) => {
  await fetch(source, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newBook),
  });
  dispatch({
    type: ADD_BOOK,
    book: newBook,
  });
});

// Remove Book
const removeBook = createAsyncThunk(REMOVE_BOOK, async (id, { dispatch }) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BoLpCLs90yg1VqJcibSz/books/${id}`, {
    method: 'DELETE',
  });
  dispatch({
    type: REMOVE_BOOK,
    book: { id },
  });
});

// Book Reducer logic
const BooksRedux = (state = prevState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.id),
      ];

    default: return state;
  }
};
export { getBooks, addBook, removeBook };
export default BooksRedux;
