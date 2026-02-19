import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import Footer from '@/ui/layout/footer/footer';
import { Content } from '@/ui/elements/content/content';
import { Subtitle } from '@/ui/elements/headings/subtitle/subtitle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Layout/Footer',
  component: Footer as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <Content className='has-text-centered'>
        <Subtitle hSize={6}>
          <strong>Bulma</strong> by&nbsp;
          <a href='https://jgthms.com'>Jeremy Thomas</a>. The source code is
          licensed&nbsp;
          <a href='https://opensource.org/license/mit'>MIT</a>. The website
          content is licensed&nbsp;
          <a href='https://creativecommons.org/licenses/by-nc-sa/4.0//'>
            CC BY NC SA 4.0
          </a>
          .
        </Subtitle>
      </Content>
    ),
  },
};
