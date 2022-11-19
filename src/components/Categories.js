import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { category } from '../redux/categories/categories';

const Categories = () => {
  const SUB = useSelector((state) => state.Category);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="button"
        value="Check Status"
        onClick={() => { dispatch(category()); }}
      />
      <p>{SUB}</p>
    </div>
  );
};

export default Categories;
