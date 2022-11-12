import React from 'react';

const styleBook = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const inStyle = {
  fontSize: '1rem',
  textTransform: 'capitalize',
  padding: '0.5rem',
};

const AddBook = () => (
  <div className="form-div">
    <form className="form" style={styleBook}>
      <h2>Add a New Book</h2>
      <input type="text" name="title" placeholder="Title" style={inStyle} />
      <input type="text" name="author" placeholder="Author" style={inStyle} />
      <input type="submit" value="Add" className="submitBtn" style={inStyle} />
    </form>
  </div>
);

export default AddBook;
