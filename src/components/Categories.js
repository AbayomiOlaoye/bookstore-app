import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { category } from '../redux/categories/categories';

const Categories = () => {
  const SUB = useSelector((state) => state.Category);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <button type="button" onClick={() => { dispatch(category()); }} className="progressUpdate"> Check Status</button>
      <p>{SUB}</p>
    </div>
  );
};

export default Categories;
