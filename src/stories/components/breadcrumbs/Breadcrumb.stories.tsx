import { Breadcrumb } from '@/ui/components/breadcrumbs/breadcrumb/breadcrumb';
import { Crumb } from '@/ui/components/breadcrumbs/crumb/crumb';
import { Icon } from '@/ui/elements/icon/icon';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentType } from 'react';
import { GrBug } from 'react-icons/gr';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Components/Breadcrumbs',
  component: Breadcrumb as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    as: {
      options: ['div', 'section'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: (
      <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
    ),
  },
};

export const AlignmentCenter: Story = {
  args: {
    position: 'centered',
    children: (
      <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
    ),
  },
};

export const AlignmentRight: Story = {
  args: {
    position: 'right',
    children: (
      <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
    ),
  },
};

export const Icons: Story = {
  args: {
    children: (
      <>
        <Crumb>
          <Icon size='small' textColor='danger'>
            <GrBug aria-hidden='true' />
          </Icon>
          <span>Home</span>
        </Crumb>
        <Crumb>
          <Icon size='small' textColor='danger'>
            <GrBug aria-hidden='true' />
          </Icon>
          <span>Docs</span>
        </Crumb>
        <Crumb active>
          <Icon size='small' textColor='danger'>
            <GrBug aria-hidden='true' />
          </Icon>
          <span>Components</span>
        </Crumb>
      </>
    ),
  },
};

export const separatorsArrow: Story = {
  args: {
    separator: 'arrow',
    children: (
      <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
    ),
  },
};

export const separatorsBullet: Story = {
  args: {
    separator: 'bullet',
    children: (
      <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
    ),
  },
};

export const separatorsDot: Story = {
  args: {
    separator: 'dot',
    children: (
      <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
    ),
  },
};

export const separatorsSucceeds: Story = {
  args: {
    separator: 'succeeds',
    children: (
      <>
        <Crumb>Home</Crumb>
        <Crumb>Docs</Crumb>
        <Crumb active>Components</Crumb>
      </>
    ),
  },
};
