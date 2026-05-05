import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ComponentType } from 'react';
import HeroBody from '@/ui/layout/hero/hero.body';
import { Title } from '@/ui/elements/headings/title/title';
import { Subtitle } from '@/ui/elements/headings/subtitle/subtitle';
import Section from '@/ui/layout/section/section';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Layout/Section',
  component: Section as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <Title>Section</Title>
        <Subtitle>
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </Subtitle>
      </>
    ),
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: (
      <HeroBody>
        <Title>Medium section</Title>
        <Subtitle>
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </Subtitle>
      </HeroBody>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: (
      <HeroBody>
        <Title>Large section</Title>
        <Subtitle>
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading.
        </Subtitle>
      </HeroBody>
    ),
  },
};
