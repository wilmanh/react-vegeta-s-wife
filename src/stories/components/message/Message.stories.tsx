import { argColors } from '@/stories/Types/argColors';
import { argLightness } from '@/stories/Types/argLightness';
import { argSizes } from '@/stories/Types/argSizes';
import Message from '@/ui/components/message/message';
import MessageBody from '@/ui/components/message/messageBody/messageBody';
import MessageHeader from '@/ui/components/message/messageHeader/messageHeader';
import { Delete } from '@/ui/elements/delete/delete';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Components/Message',
  component: Message as ComponentType,
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
  argTypes: { ...argColors, ...argSizes, ...argLightness },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    children: (
      <>
        <MessageHeader>
          <p>Hello World</p>
          <Delete />
        </MessageHeader>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </MessageBody>
      </>
    ),
  },
};

export const Headless: Story = {
  args: {
    children: (
      <MessageBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
        nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
        purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
        a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </MessageBody>
    ),
  },
};
