import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/UserActions'; // Assuming you have created the register action.
import { useLocation, useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const history = useNavigate()

  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1]:'/'

  useEffect(()=>{
    if(userInfo){
        history(redirect)
    }

  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch the register action with the form data
    dispatch(register(username, email, password));
  };

  return (
    <div className='loginPage'>
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterScreen;
