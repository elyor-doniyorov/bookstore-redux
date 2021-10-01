import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="app-header">
        <div className="app-nav">
          <Link to="/" className="link brand-name">
            Bookstore CMS
          </Link>
          <Link to="/" className="link nav-link">
            BOOKS
          </Link>
          <Link to="/categories" className="link nav-link">
            CATEGORIES
          </Link>
          <span className="user user-icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
