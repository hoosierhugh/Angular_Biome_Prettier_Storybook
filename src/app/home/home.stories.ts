import type { Meta, StoryObj } from '@storybook/angular-vite';
import { Home } from './home';

const meta: Meta<Home> = {
  title: 'App/Home',
  component: Home,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<Home>;

export const Default: Story = {};
