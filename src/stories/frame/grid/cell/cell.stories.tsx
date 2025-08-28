import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import FixedGrid from '@/ui/grid/fixed/fixedGrid';
import Grid from '@/ui/grid/smart/smartGrid';
import Cell from '@/ui/grid/cell/cell';

const numberArray = (length: number, start = 1) =>
  Array.from({ length }, (_, i) => (i + start).toString());

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Frame/Grid/Cell',
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ColumnStart: Story = {
  args: {
    columns: '4',
    children: (
      <>
        <Grid>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 1</code>
            </p>
          </Cell>
          <Cell colStart='3'>
            <p className='bd-notification is-primary'>
              <code>Cell 2</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 3</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 4</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 5</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 6</code>
            </p>
          </Cell>
        </Grid>
      </>
    ),
  },
};

export const ColumnFromEnd: Story = {
  args: {
    columns: '4',
    children: (
      <>
        <Grid>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 1</code>
            </p>
          </Cell>
          <Cell colEnd='2'>
            <p className='bd-notification is-primary'>
              <code>Cell 2</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 3</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 4</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 5</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 6</code>
            </p>
          </Cell>
        </Grid>
      </>
    ),
  },
};

export const ColumnSpan: Story = {
  args: {
    columns: '4',
    children: (
      <>
        <Grid>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 1</code>
            </p>
          </Cell>
          <Cell colSpan='2'>
            <p className='bd-notification is-primary'>
              <code>Cell 2</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 3</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 4</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 5</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 6</code>
            </p>
          </Cell>
        </Grid>
      </>
    ),
  },
};

export const RowStart: Story = {
  args: {
    columns: '4',
    children: (
      <>
        <Grid>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 1</code>
            </p>
          </Cell>
          <Cell rowStart='3'>
            <p className='bd-notification is-primary'>
              <code>Cell 2</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 3</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 4</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 5</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 6</code>
            </p>
          </Cell>
        </Grid>
      </>
    ),
  },
};

export const RowFromEnd: Story = {
  args: {
    columns: '4',
    children: (
      <>
        <Grid>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 1</code>
            </p>
          </Cell>
          <Cell rowEnd='1'>
            <p className='bd-notification is-primary'>
              <code>Cell 2</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 3</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 4</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 5</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 6</code>
            </p>
          </Cell>
        </Grid>
      </>
    ),
  },
};

export const RowSpan: Story = {
  args: {
    columns: '4',
    children: (
      <>
        <Grid>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 1</code>
            </p>
          </Cell>
          <Cell rowSpan='2' className='bd-notification is-primary'>
            <code>Cell 2</code>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 3</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 4</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 5</code>
            </p>
          </Cell>
          <Cell>
            <p className='bd-notification is-primary'>
              <code>Cell 6</code>
            </p>
          </Cell>
        </Grid>
      </>
    ),
  },
};
