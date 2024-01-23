
import React from 'react';

const Header = ({ showSidebar, toggleSidebar, isLoggedIn, username, handleLogin }) => {
  return (
    <header>
      <button className="hamburger" onClick={toggleSidebar}>☰</button>
      <div className="header-right">
        {isLoggedIn ? (
          <div className="user">{username}</div>
        ) : (
          <button className="login" onClick={handleLogin}>Login</button>
        )}
      </div>
    </header>
  );
};

export default Header;
