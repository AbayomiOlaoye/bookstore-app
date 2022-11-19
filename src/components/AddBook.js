import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

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

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const despatch = useDispatch();

  const addNewBook = (e) => {
    e.preventDefault();
    const thisBook = {
      title,
      author,
      id: uuidv4(),
    };

    despatch(addBook(thisBook));
    setTitle('');
    setAuthor('');
  };

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="form-div">
      <form className="form" style={styleBook} onSubmit={addNewBook}>
        <h2>Add a New Book</h2>
        <input type="text" name="title" placeholder="Title" style={inStyle} onChange={getTitle} value={title} required />
        <input type="text" name="author" placeholder="Author" style={inStyle} onChange={getAuthor} value={author} required />
        <input type="submit" value="Add" className="submitBtn" style={inStyle} />
      </form>
    </div>
  );
};

export default AddBook;
