import { Locator, Page } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly inputBox: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputBox = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.getByTestId('todo-item');
  }

  async open() {
    await this.page.goto('./');
  }

  async addTodo(text: string) {
    await this.inputBox.fill(text);
    await this.inputBox.press('Enter');
  }

  getTodo(text: string) {
    return this.todoItems.filter({ hasText: text });
  }
}