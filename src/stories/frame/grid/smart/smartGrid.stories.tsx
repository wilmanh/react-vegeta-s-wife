import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';

import Cell from '@/ui/grid/cell/cell';
import SmartGrid from '@/ui/grid/smart/smartGrid';

const numberArray = (length: number, start = 1) =>
  Array.from({ length }, (_, i) => i + start);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Frame/Grid/Smart',
  component: SmartGrid as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    columnSize: {
      control: 'select',
      options: numberArray(32),
    },
    gap: {
      control: 'select',
      options: numberArray(9, 0),
    },
    columnGap: {
      control: 'select',
      options: numberArray(9, 0),
    },
    rowGap: {
      control: 'select',
      options: numberArray(9, 0),
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof SmartGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const cellsArray = numberArray(24);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basics: Story = {
  args: {
    children: (
      <>
        {cellsArray.map((cell) => (
          <Cell key={`cell-${cell}`}>
            <p className='bd-notification is-primary'>
              <code>Cell {cell}</code>
            </p>
          </Cell>
        ))}
      </>
    ),
  },
};
