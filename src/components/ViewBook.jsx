import React from 'react';
import PropTypes from 'prop-types';

const ViewBook = ({ book }) => (
  <div className="booklet">
    <p className="title">
      Title:
      {book.title}
    </p>
    <p className="author">
      Author:
      {book.author}
    </p>
  </div>
);

ViewBook.propTypes = {
  book: PropTypes.node.isRequired,
};

export default ViewBook;
