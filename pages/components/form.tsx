import { NextPage } from 'next';
import { useState } from 'react';
import Styles from '../../styles/home.module.css';

const Register = () => {
  return (
    <div className={Styles.form}>
      <input type='text' placeholder='Username' />
      <input type='text' placeholder='Phone' />
      <input type='text' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <button type='submit'>Register</button>
    </div>
  );
};
const Login = () => {
  return (
    <div className={Styles.form}>
      <input type='text' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <button type='submit'>Login</button>
    </div>
  );
};

const Form: NextPage = () => {
  const [onLogin, setLogin] = useState(true);
  return (
    <div className={Styles['form-container']}>
      <span className={Styles['header-container']}>
        <h2
          onClick={() => setLogin(true)}
          className={onLogin ? Styles['focus'] : Styles['not']}
        >
          Login
        </h2>
        <h2
          onClick={() => setLogin(false)}
          className={onLogin ? Styles['not'] : Styles['focus']}
        >
          Register
        </h2>
      </span>
      {onLogin ? <Login /> : <Register />}
    </div>
  );
};

export default Form;
