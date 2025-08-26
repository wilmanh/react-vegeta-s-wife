import { argSizes } from '@/stories/Types/argSizes';
import Tab from '@/ui/components/tabs/tab/tabsTab';
import Tabs from '@/ui/components/tabs/tabs';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Components/Tabs',
  component: Tabs as ComponentType,
  decorators: (Story) => (
    <div style={{ padding: '5rem' }} className='theme-dark'>
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
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    boxed: false,
    fullwidth: false,
    position: 'centered',
    toggle: false,
    rounded: false,
    children: (
      <>
        <Tab active>Pictures</Tab>
        <Tab>Music</Tab>
        <Tab>Videos</Tab>
        <Tab>Documents</Tab>
      </>
    ),
  },
};
