import { useState } from 'react';
import { signIn } from 'next-auth/client';
import TextField from 'components/TextField';
import { Wrapper, SubmitButton, FormLoading, FormError } from 'components/Form';
import { useRouter } from 'next/dist/client/router';

const FormSignin = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [loading, setLoadind] = useState(false);
  const routes = useRouter();
  const [formError, setFormError] = useState('');
  const { push, query } = routes;

  const handleInput = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoadind(true);

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    });

    if (result?.url) {
      return push(result.url);
    }

    setLoadind(false);
    setFormError('user or password is invalid.');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h1>Signin</h1>
        {!!formError && <FormError>{formError}</FormError>}

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
          {loading ? <FormLoading /> : <span>Signin now</span>}
        </SubmitButton>
      </form>
    </Wrapper>
  );
};

export default FormSignin;
