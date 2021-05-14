import TextField from 'components/TextField';
import Button from 'components/Button';
import { Wrapper, FormError, FormLoading, FormLink } from 'components/Form';
import React, { useState } from 'react';
import api from 'services/api';
import { signIn } from 'next-auth/client';
import Link from 'next/link';

const FormSignup = () => {
  const [loading, setLoadind] = useState(false);
  const [formError, setFormError] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: ''
  });

  const handleInput = async (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoadind(true);

    try {
      await api.post('auth/register', {
        ...values
      });

      signIn('credentials', {
        email: values.email,
        password: values.password,
        callbackUrl: '/'
      });
    } catch (error) {
      setFormError('a user already have this email');
      setLoadind(false);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        {!!formError && <FormError>{formError}</FormError>}

        <TextField
          name="first_name"
          placeholder="First Name"
          type="text"
          label="First Name"
          required
          onInputChange={(value) => handleInput('first_name', value)}
        />
        <TextField
          name="last_name"
          placeholder="Last Name"
          type="text"
          label="Last name"
          required
          onInputChange={(value) => handleInput('last_name', value)}
        />

        <TextField
          name="email"
          placeholder="Email"
          type="email"
          label="Email"
          required
          onInputChange={(value) => handleInput('email', value)}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          label="Password"
          required
          onInputChange={(value) => handleInput('password', value)}
        />

        <Button type="submit" fullWidth>
          {loading ? <FormLoading /> : <>Signup now</>}
        </Button>
      </form>

      <FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </Wrapper>
  );
};

export default FormSignup;
