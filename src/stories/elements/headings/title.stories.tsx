import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ComponentType } from 'react';
import { argHeadingSizes } from '@/stories/Types/argHeadings';
import { argSpaced } from '@/stories/Types/argSpaced';
import { ArrayOfHeadingSizes } from '@/logic/types/sizes';
import { Title } from '@/ui/elements/headings/title/title';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Elements/Headings/Title',
  component: Title as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    ...argHeadingSizes,
    ...argSpaced,
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Title 1',
    hSize: ArrayOfHeadingSizes[0],
  },
};

export const Titles: Story = {
  render: () => (
    <div>
      <Title spaced hSize={1}>
        Title 1
      </Title>
      <Title spaced hSize={2}>
        Title 2
      </Title>
      <Title spaced hSize={3}>
        Title 3
      </Title>
      <Title spaced hSize={4}>
        Title 4
      </Title>
      <Title spaced hSize={5}>
        Title 5
      </Title>
      <Title spaced hSize={6}>
        Title 6
      </Title>
    </div>
  ),
};
