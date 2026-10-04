import type { Meta, StoryObj } from '@storybook/angular-vite';

import { ProfilePhoto } from './profile-photo';

const meta: Meta<ProfilePhoto> = {
  title: 'App/ProfilePhoto',
  component: ProfilePhoto,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ProfilePhoto>;

export const Default: Story = {
  args: {
    photoUrl: `https://randomuser.me/api/portraits/women/82.jpg`,
  },
};
