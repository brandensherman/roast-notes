import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const HomeScreen = () => {
  return (
    <div className='container auth-container'>
      <Login />
      {/* <Register /> */}
    </div>
  );
};

export default HomeScreen;
