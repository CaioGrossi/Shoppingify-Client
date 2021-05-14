global.fetch = require('node-fetch');

import { server } from '../src/utils/mockServer/server';

beforeAll(async () => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
