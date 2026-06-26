import React from 'react';
import { MdMenu, MdSearch } from 'react-icons/md';
import './Header.css';

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <MdMenu size={24} />
        </button>
        <h1>Welcome back</h1>
      </div>

      <div className="header-right">
        <div className="search-box">
          <MdSearch size={20} />
          <input type="text" placeholder="Search here" />
        </div>
        <button className="gold-member-btn">Gold Member</button>
      </div>
    </header>
  );
}

export default Header;
