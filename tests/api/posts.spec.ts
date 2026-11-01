import { test, expect } from '@playwright/test';

test('POST creates a practice resource', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Okta interview practice',
        body: 'Learning API automation with Playwright',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.id).toBe(101);
  expect(body.title).toBe('Okta interview practice');
  expect(body.body).toBe('Learning API automation with Playwright');
  expect(body.userId).toBe(1);
});