import React, { useState, useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            name='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className='btn btn-submit' type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
