import { Args, ArgTypes } from '@storybook/react-vite';
import { ArrayOfColors, ArrayOfOnlyColors } from '../../logic/types/colors';

export const argColors: Partial<ArgTypes<Args>> = {
  color: { control: 'select', options: ArrayOfColors },
};
export const argTextColors: Partial<ArgTypes<Args>> = {
  textColor: { control: 'select', options: ArrayOfOnlyColors },
};
