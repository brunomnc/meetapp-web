import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/dog-svgrepo-com.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email')
    .required('Required field'),
  password: Yup.string().required('Password is required'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoDog" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Submit</button>
        <Link to="register">Sign Up!</Link>
      </Form>
    </>
  );
}
