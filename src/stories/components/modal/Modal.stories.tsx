import ModalCardBody from '@/ui/components/modal/card/body/body';
import ModalCard from '@/ui/components/modal/card/card';
import ModalCardFooter from '@/ui/components/modal/card/footer/footer';
import ModalCardHeader from '@/ui/components/modal/card/header/modalHeader';
import ModalCardTitle from '@/ui/components/modal/card/header/title/modalCardTitle';
import Content from '@/ui/components/modal/content/content';
import Modal from '@/ui/components/modal/modal';
import { Box } from '@/ui/elements/box/box';
import { Button } from '@/ui/elements/button/button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Components/Modal',
  component: Modal as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    active: true,
    children: (
      <>
        <Content>
          <Box>
            <p>Hello World</p>
          </Box>
        </Content>
        <button className='modal-close is-large' aria-label='close'></button>
      </>
    ),
  },
};

export const Headless: Story = {
  args: {
    active: true,
    children: (
      <ModalCard>
        <ModalCardHeader>
          <ModalCardTitle>Hello World</ModalCardTitle>
        </ModalCardHeader>
        <ModalCardBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
            sint corrupti fugit necessitatibus, minus velit voluptatem rerum
            fugiat nemo quis hic sed unde architecto voluptatibus itaque? Quasi,
            error unde!
          </p>
        </ModalCardBody>
        <ModalCardFooter>
          <Button color='primary'>Save</Button>
          <Button color='danger'>Close</Button>
        </ModalCardFooter>
      </ModalCard>
    ),
  },
};
