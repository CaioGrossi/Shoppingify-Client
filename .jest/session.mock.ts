// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
const session = { jwt: '233', user: { email: 'lorem@ipsum.com' } };
useSession.mockImplementation(() => [session]);
