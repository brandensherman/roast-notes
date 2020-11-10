import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../reducers/userAuthReducer';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.user);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className='auth-container'>
      <form className='form-container' onSubmit={handleSubmit}>
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className='btn btn-submit' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
