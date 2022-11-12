import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowBooks from './components/ShowBooks';
import Categories from './components/Categories';
import Layout from './components/Layout';

const App = () => (
  <Router>
    <Layout />
    <Routes>
      <Route index element={<ShowBooks />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
