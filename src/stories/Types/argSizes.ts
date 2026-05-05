import { ArrayOfSizes } from '@/logic/types/sizes';
import { Args, ArgTypes } from '@storybook/react-vite';

export const argSizes: Partial<ArgTypes<Args>> = {
  size: { control: 'select', options: ArrayOfSizes },
};

export const argInputSizes: Partial<ArgTypes<Args>> = {
  inputSize: { control: 'select', options: ArrayOfSizes },
};
