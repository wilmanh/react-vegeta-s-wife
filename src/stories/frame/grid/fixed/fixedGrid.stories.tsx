import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import FixedGrid from '@/ui/grid/fixed/fixedGrid';
import Grid from '@/ui/grid/smart/smartGrid';
import Cell from '@/ui/grid/cell/cell';

const numberArray = (length: number, start = 1) =>
  Array.from({ length }, (_, i) => (i + start).toString());

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Frame/Grid/Fixed',
  component: FixedGrid as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: numberArray(12),
    },
    autoCount: {
      control: 'select',
      options: [true, false],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof FixedGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const cellsArray = numberArray(12);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basics: Story = {
  args: {
    children: (
      <>
        <Grid>
          {cellsArray.map((cell) => (
            <Cell key={cell}>
              <p className='bd-notification is-primary'>
                <code>Cell {cell}</code>
              </p>
            </Cell>
          ))}
        </Grid>
      </>
    ),
  },
};
