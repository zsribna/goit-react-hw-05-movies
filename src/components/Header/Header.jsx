import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className={css.Header}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${css['NavElement']} ${isActive ? css.active : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `${css['NavElement']} ${isActive ? css.active : ''}`
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
