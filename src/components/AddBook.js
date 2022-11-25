import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const styleBook = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  fontFamily: "'Montserrat', 'sans-serif'",
};

const inStyle = {
  fontSize: '1rem',
  color: 'var(--light-pink)',
  border: '1px solid var(--black-5)',
  textTransform: 'capitalize',
  padding: '0.5rem',
};

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const despatch = useDispatch();

  const addNewBook = (e) => {
    e.preventDefault();
    const thisBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };

    despatch(addBook(thisBook));
    setTitle('');
    setAuthor('');
  };

  const getTitle = (e) => setTitle(e.target.value);

  const getAuthor = (e) => setAuthor(e.target.value);

  const description = (e) => setCategory(e.target.value);

  return (
    <motion.div className="form-div">
      <motion.form
        className="form"
        style={styleBook}
        onSubmit={addNewBook}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.h2
          initial={{ color: '#121212', y: -100 }}
          animate={{ color: '#888', y: 0 }}
          transition={
            {
              duration: 2, ease: 'linear', type: 'tween',
            }
          }
        >
          Add a New Book
        </motion.h2>
        <div className="inputElems flex">
          <input type="text" name="title" className="book-title" placeholder="Title" style={inStyle} onChange={getTitle} value={title} required />
          <input type="text" name="author" className="book-author" placeholder="Author" style={inStyle} onChange={getAuthor} value={author} required />
          <select onChange={description} name="category" className="book-category" style={inStyle}>
            <option>Category</option>
            <option value="Leadership">Leadership</option>
            <option value="Romance">Romance</option>
            <option value="Inspirational">Inspirational</option>
            <option value="Adventure">Adventure</option>
            <option value="Investment">Investment</option>
            <option value="Fiction">Fiction</option>
            <option value="Myths & Legends">Myths & Legends</option>
            <option value="Drama">Drama</option>
          </select>
          <input type="submit" value="Add" className="submitBtn" />
        </div>
      </motion.form>
    </motion.div>
  );
};

export default AddBook;
