import TextField from 'components/TextField';
import { SubmitButton, Wrapper, FormError, FormLoading } from 'components/Form';
import React, { useState } from 'react';
import api from 'services/api';
import { signIn } from 'next-auth/client';

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
          onInputChange={(value) => handleInput('first_name', value)}
        />
        <TextField
          name="last_name"
          placeholder="Last Name"
          type="text"
          label="Last name"
          onInputChange={(value) => handleInput('last_name', value)}
        />

        <TextField
          name="email"
          placeholder="Email"
          type="email"
          label="Email"
          onInputChange={(value) => handleInput('email', value)}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          label="Password"
          onInputChange={(value) => handleInput('password', value)}
        />

        <SubmitButton type="submit">
          {loading ? <FormLoading /> : <span>Signup now</span>}
        </SubmitButton>
      </form>
    </Wrapper>
  );
};

export default FormSignup;
