import { argSizes } from '@/stories/Types/argSizes';
import Input from '@/ui/form/input/input';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { argColors } from '../Types/argColors';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Form/Input',
  component: Input as ComponentType,
  decorators: (Story) => (
    <div style={{ margin: '1rem' }} className='theme-dark'>
      <Story />
    </div>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argSizes,
    ...argColors,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    hover: false,
    focus: false,
    static: false,
    disabled: false,
    value: '',
    placeholder: 'Type something...',
  },
};
