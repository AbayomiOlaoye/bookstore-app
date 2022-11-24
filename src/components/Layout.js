import { Outlet, Link } from 'react-router-dom';
import React from 'react';

// const header = {

// };

const Layout = () => (
  <div className="line-hr">
    <header className="header flex">
      <div className="head flex">
        <svg width="118">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#242424', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0290ff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="70" rx="35" ry="25" fill="url(#grad1)" />
          <text fill="#ffffff" fontFamily="system-ui" fontSize="30" x="80" y="80">BS</text>
          Sorry, your browser does not support inline SVG.
        </svg>
        <h1 className="logo">BookStore CMS</h1>
      </div>
      <nav className="nav">
        <ul className="navLinks flex">
          <li><Link to="/">Book</Link></li>
          <li><Link to="Categories">Category</Link></li>
        </ul>
      </nav>
    </header>
    <Outlet />
  </div>
);

export default Layout;
