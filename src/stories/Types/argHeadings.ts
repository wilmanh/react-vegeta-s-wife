import { ArrayOfHeadingSizes } from '@/logic/types/sizes';
import { Args, ArgTypes } from '@storybook/react-vite';

export const argHeadingSizes: Partial<ArgTypes<Args>> = {
  hSize: { control: 'select', options: [...ArrayOfHeadingSizes, undefined] },
};
