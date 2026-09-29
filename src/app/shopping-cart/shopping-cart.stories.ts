import type { Meta, StoryObj } from '@storybook/angular-vite';
import { expect, userEvent, within } from 'storybook/test';
import { ShoppingCartComponent } from './shopping-cart';

const meta: Meta<ShoppingCartComponent> = {
  title: 'App/Shopping Cart', // sidebar path: App → Shopping Cart
  component: ShoppingCartComponent,
  tags: ['autodocs'], // auto-generates a Docs page
};

export default meta;

type Story = StoryObj<ShoppingCartComponent>;

export const Empty: Story = {};

export const Full: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const add = canvas.getByText('+ Add Item');

    for (let i = 0; i < 10; i++) {
      await userEvent.click(add);
    }

    await expect(canvas.getByText('Maximum stock reached (10)!')).toBeVisible();
    await expect(add).toBeDisabled();
  },
};
