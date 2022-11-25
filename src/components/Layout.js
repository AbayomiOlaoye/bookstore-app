import { Outlet, NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import React from 'react';

const logoAnimation = {
  start: {
    opacity: 0,
    pathLength: 1,
  },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const Layout = () => (
  <div className="line-hr">
    <header className="header flex">
      <div className="head flex">
        <svg width="118" className="svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#242424', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0290ff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <motion.ellipse
            cx="100"
            cy="70"
            rx="35"
            ry="25"
            fill="url(#grad1)"
            variants={logoAnimation}
            initial="start"
            animate="finished"
          />
          <text fill="#ffffff" fontFamily="system-ui" fontSize="30" x="80" y="80">BS</text>
          Sorry, your browser does not support inline SVG.
        </svg>
        <h1 className="logo">BookStore CMS</h1>
      </div>
      <nav className="nav">
        <ul className="navLinks flex">
          <li><NavLink to="/">Book</NavLink></li>
          <li><NavLink to="/Categories">Category</NavLink></li>
        </ul>
      </nav>
      <div className="user-div"><BsFillPersonFill /></div>
    </header>
    <Outlet />
  </div>
);

export default Layout;
