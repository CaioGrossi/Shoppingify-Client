import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import api from 'services/api';

type AxiosLoginResponse = {
  user: {
    email: string;
    first_name: string;
    last_name: string;
  };

  jwt: string;
};

export default NextAuth({
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',

      async authorize(credentials: { email: string; password: string }) {
        const response = await api.post<AxiosLoginResponse>('auth/login', {
          email: credentials.email,
          password: credentials.password
        });

        console.log(response);

        const data = response.data;

        if (data.user) {
          return { ...data.user, jwt: data.jwt };
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    session: async (session, user) => {
      session.jwt = user.jwt;

      if (session.user) {
        session.user.name = `${user.first_name} ${user.last_name}`;
      }
      return Promise.resolve(session);
    },
    jwt: async (token, user) => {
      if (user) {
        token.email = user.email;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.jwt = user.jwt;
      }

      return Promise.resolve(token);
    }
  }
});
