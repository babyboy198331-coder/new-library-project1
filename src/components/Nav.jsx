import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Library from '../assets/Library.svg';

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={Library} alt="Library logo" className="logo" />
        </a>

        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>

          <li className="nav__list">
            <a href="/" className="nav__link">
              Books
            </a>
          </li>
        </ul>

        <button className="btn__menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;