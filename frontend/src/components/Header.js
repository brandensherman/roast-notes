import React from 'react';

const Header = () => {
  return (
    <nav className='container'>
      <h1 className='logo'>Roast Notes</h1>

      <div className='nav-buttons'>
        <button className='btn btn-nav btn-login'>Login</button>
        <button className='btn btn-nav btn-register'>Register</button>
      </div>
    </nav>
  );
};

export default Header;
