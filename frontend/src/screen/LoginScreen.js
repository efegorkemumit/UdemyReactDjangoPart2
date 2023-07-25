import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/UserActions'; // Assuming you have created the login action.
import { useLocation, useNavigate } from 'react-router-dom';
import '../my.css'

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

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
    // Dispatch the login action with the form data
    dispatch(login(username, password));
  };

  return (
    <div className='loginPage'>
      <h2>Login</h2>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
