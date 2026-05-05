import { ComponentType } from 'react';

import { ArrayOfSizes } from '@/logic/types/sizes';
import { argSizes } from '@/stories/Types/argSizes';
import PaginationButton from '@/ui/components/pagination/button/paginationButton';
import PaginationEllipsis from '@/ui/components/pagination/ellipsis/paginationEllipsis';
import PaginationLink from '@/ui/components/pagination/link/paginationLink';
import PaginationList from '@/ui/components/pagination/list/paginationList';
import Pagination from '@/ui/components/pagination/pagination';

import type { Meta, StoryObj } from '@storybook/react-vite';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Components/Pagination',
  component: Pagination as ComponentType,
  decorators: (Story) => (
    <div style={{ padding: '5rem' }} className='theme-light'>
      <Story />
    </div>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    scale: { control: 'select', options: ArrayOfSizes },
    position: {
      control: 'select',
      options: ['centered', 'right', 'left'],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    isRounded: false,
    children: (
      <>
        <PaginationButton type='next'>Next</PaginationButton>
        <PaginationButton type='previous'>Previous</PaginationButton>
        <PaginationList>
          <PaginationLink>1</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink>29</PaginationLink>
          <PaginationLink>30</PaginationLink>
          <PaginationLink current>31</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink>50</PaginationLink>
        </PaginationList>
      </>
    ),
  },
};
