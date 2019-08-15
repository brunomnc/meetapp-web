import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/dog-svgrepo-com.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoDog" />
      <form>
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
        <Link to="register">Sign Up!</Link>
      </form>
    </>
  );
}
