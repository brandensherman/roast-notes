import React, { useState, useEffect } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm password'
            value={password}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className='btn btn-submit' type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Register;
