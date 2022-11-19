import { Outlet, Link } from 'react-router-dom';
import React from 'react';

const Layout = () => (
  <>
    <header className="header flex">
      <h1 className="logo">
        Book
        <span style={{ color: 'seagreen' }}>
          Store
        </span>
      </h1>
      <nav className="nav">
        <ul className="navLinks flex">
          <li><Link to="/">Book</Link></li>
          <li><Link to="category">Category</Link></li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Layout;
