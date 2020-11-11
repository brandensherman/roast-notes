import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/userAuthReducer';

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className='nav-container'>
      <Link to='/'>
        <h1 className='logo'>Roast Notes</h1>
      </Link>

      <div className='nav-links'>
        {userInfo ? (
          <>
            <Link to='/register' className='nav-item' onClick={logoutHandler}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to='/login' className='nav-item'>
              Login
            </Link>
            <Link to='/register' className='nav-item'>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
