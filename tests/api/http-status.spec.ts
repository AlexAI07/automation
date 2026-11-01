import { test, expect } from '@playwright/test';

test('API returns expected 404 status', async ({ request }) => {
  const response = await request.get('https://httpbin.org/status/404');

  expect(response.status()).toBe(404);
});