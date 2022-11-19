const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const prevState = [];

// Action Logic
const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
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
export { addBook, removeBook };
export default BooksRedux;
