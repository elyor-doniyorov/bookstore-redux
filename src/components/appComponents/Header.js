import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="row d-flex justify-content-between">
        <div className="col">
          <Link to="/" className="link brand-name">
            Bookstore CMS
          </Link>
          <Link to="/" className="link nav-link">
            BOOKS
          </Link>
          <Link to="/categories" className="link nav-link">
            CATEGORIES
          </Link>
        </div>
        <div className="col user">
          <span className="user-icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
