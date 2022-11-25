import React from 'react';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { removeBook } from '../redux/books/books';
import zeroPercent from '../assets/not_started.svg';
import eight from '../assets/eight_percent.svg';
import sixtyFour from '../assets/sixty-four.svg';

const animateBook = {
  isHidden: { opacity: 0, x: '-100%' },
  isVisible: (transit) => ({
    opacity: 1,
    x: 0,
    transition: { delay: transit },
  }),
};

const ViewBook = (book, index) => {
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
  let status;

  if (title === 'Midas Touch') {
    percentage = 64;
    status = sixtyFour;
    chapter = 'Chapter 17';
  } else if (title === 'Maximizing Your potentials') {
    percentage = 8;
    status = eight;
    chapter = 'Chapter 3: "A Lesson Learned"';
  } else if (title === 'Richest man in babylon') {
    percentage = 0;
    status = zeroPercent;
    chapter = 'Introduction';
  } else {
    percentage = 0;
    status = zeroPercent;
    chapter = 'Not started yet';
  }

  return (
    <AnimatePresence>
      <motion.div
        key={id}
        className="booklet-card flex"
        variants={animateBook}
        initial="isHidden"
        animate="isVisible"
        exit="isHidden"
        layoutId={id}
        transit={(index + 1) * 0.2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}
      >
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
            <img src={status} alt="graphical representation of reader's status" className="Oval-2" />
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
      </motion.div>
    </AnimatePresence>
  );
};

export default ViewBook;
