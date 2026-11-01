import { test, expect } from '@playwright/test';
import { TodoPage } from '../../pages/todo.page';

test('user can add a todo', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.open();
  await todoPage.addTodo('Prepare for Okta interview');

  await expect(
    todoPage.getTodo('Prepare for Okta interview')
  ).toHaveCount(1);
});