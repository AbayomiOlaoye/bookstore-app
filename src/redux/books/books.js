const ADD_BOOK = 'BookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'BookStore/book/REMOVE_BOOK';

const prevState = [];

// Action part
const addBook = (book) => ({
  type: ADD_BOOK,
  item: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

// Reducer part
const BooksReducers = (state = prevState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.item.book,
      ];
    case REMOVE_BOOK:
      return [
        state.filter((book) => book.id !== action.id),
      ];

    default: return state;
  }
};
export { addBook, removeBook };
export default BooksReducers;
