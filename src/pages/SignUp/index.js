import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/dog-svgrepo-com.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoDog" />
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Create Account</button>
        <Link to="/">Already have an account!</Link>
      </form>
    </>
  );
}
