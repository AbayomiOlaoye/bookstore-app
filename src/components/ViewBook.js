import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const ViewBook = (book) => {
  const {
    id,
    title,
    author,
    category,
  } = book;

  const dispatch = useDispatch();

  const deleteBook = () => dispatch(removeBook(id));

  let percentage;
  let chapter;

  if (title === 'Midas Touch') {
    percentage = 64;
    chapter = 'Chapter 17';
  } else if (title === 'Maximizing Your potentials') {
    percentage = 8;
    chapter = 'Chapter 3: "A Lesson Learned"';
  } else if (title === 'Richest man in babylon') {
    percentage = 0;
    chapter = 'Introduction';
  } else {
    percentage = 0;
    chapter = 'Not started yet';
  }

  return (
    <div className="booklet-card flex">
      <div className="book-card">
        <div className="book-info">
          <p className="category">{category}</p>
          <p className="title">{title}</p>
          <p className="author">{author}</p>
          <div className="book-actions flex">
            <button type="button">Comment</button>
            <button type="button" onClick={deleteBook}>Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
      <div className="bookData flex">
        <div className="chart flex">
          <div className="Oval-2" />
          <div className="percentage">
            <p className="percent">
              {percentage}
              %
            </p>
            <p className="status">Completed</p>
          </div>
        </div>
        <div className="update">
          <h4 className="current">Current Chapter</h4>
          <p className="chapter">{chapter}</p>
          <button type="button" className="progressUpdate">
            update progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
