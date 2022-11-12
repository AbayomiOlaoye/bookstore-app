import React, { useState } from 'react';
import AddBook from './AddBook';
import ViewBook from './ViewBook';

const ShowBooks = () => {
  const [books] = useState([
    {
      id: 1,
      title: 'Maximizing Your Potentials',
      author: 'Dr. Myles Munroe',
    },
    {
      id: 2,
      title: 'Awakening Sleeping Giant in You',
      author: 'Oluwatoyin Olaoye',
    },
    {
      id: 3,
      title: 'The Richest Man in Babylon',
      author: 'George Clason',
    },
  ]);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className="card">
          <ViewBook book={book} />
          <input type="button" value="Remove" />
        </div>
      ))}
      <AddBook />
    </div>
  );
};

export default ShowBooks;
