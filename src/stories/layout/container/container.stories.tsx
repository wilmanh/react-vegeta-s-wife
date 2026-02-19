import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import Container from '@/ui/layout/container/container';
import { Notification } from '@/ui/elements/notification/notification';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Layout/Container',
  component: Container as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <Notification color='primary'>
        This container is <strong>centered</strong> on desktop and larger
        viewports.
      </Notification>
    ),
  },
};

export const WidescreenOnly: Story = {
  args: {
    widescreen: true,
    children: (
      <Notification color='primary'>
        This container is <strong>fullwidth</strong> <em>until</em> the
        <code>$widescreen</code> breakpoint.
      </Notification>
    ),
  },
};

export const FullhdOnly: Story = {
  args: {
    fullhd: true,
    children: (
      <Notification color='primary'>
        This container is <strong>fullwidth</strong> <em>until</em> the
        <code>$fullhd</code> breakpoint.
      </Notification>
    ),
  },
};

export const TableMaximumWidth: Story = {
  args: {
    max: 'tablet',
    children: (
      <Notification color='primary'>
        This container has a <code>max-width</code> of
        <code>$tablet - $container-offset</code>.
      </Notification>
    ),
  },
};

export const DesktopMaximumWidth: Story = {
  args: {
    max: 'desktop',
    children: (
      <Notification color='primary'>
        This container has a <code>max-width</code> of
        <code>$desktop - $container-offset</code>.
      </Notification>
    ),
  },
};

export const WideScreenMaximumWidth: Story = {
  args: {
    max: 'widescreen',
    children: (
      <Notification color='primary'>
        This container has a <code>max-width</code> of
        <code>$widescreen - $container-offset</code>.
      </Notification>
    ),
  },
};

export const Fluid: Story = {
  args: {
    fluid: true,
    children: (
      <Notification color='primary'>
        This container is <strong>fluid</strong>: it will have a 32px gap on
        either side, on any viewport size.
      </Notification>
    ),
  },
};
