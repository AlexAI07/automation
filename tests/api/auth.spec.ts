import { test, expect } from '@playwright/test';

test('login and access protected endpoint', async ({ request }) => {
  const loginResponse = await request.post(
    `${process.env.API_BASE_URL}/auth/login`,
    {
      data: {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30,
      },
    }
  );

  expect(loginResponse.status()).toBe(200);

  const loginBody = await loginResponse.json();
  expect(loginBody.accessToken).toBeTruthy();

  const meResponse = await request.get(
    `${process.env.API_BASE_URL}/auth/me`,
    {
      headers: {
        Authorization: `Bearer ${loginBody.accessToken}`,
      },
    }
  );

  expect(meResponse.status()).toBe(200);

  const me = await meResponse.json();
  expect(me.username).toBe('emilys');
});