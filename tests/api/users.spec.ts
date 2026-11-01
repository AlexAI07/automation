import { test, expect } from '@playwright/test';

test('GET user returns expected data', async ({ request }) => {
  const response = await request.get(
  `${process.env.API_BASE_URL}/users/1`
);

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.firstName).toBe('Emily');
  expect(body.username).toBe('emilys');
});