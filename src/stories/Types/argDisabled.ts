import { Args, ArgTypes } from '@storybook/react-vite';

export const argDisabled: Partial<ArgTypes<Args>> = {
  disabled: { control: 'boolean' },
};
