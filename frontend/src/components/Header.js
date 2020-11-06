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
    <nav className='container'>
      <Link to='/'>
        <h1 className='logo'>Roast Notes</h1>
      </Link>

      <div className='nav-buttons'>
        {userInfo ? (
          <>
            <Link to='/register'>
              <button
                className='btn btn-nav btn-logout'
                onClick={logoutHandler}
              >
                Logout
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to='/login'>
              <button className='btn btn-nav btn-login'>Login</button>
            </Link>
            <Link to='/register'>
              <button className='btn btn-nav btn-register'>Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
