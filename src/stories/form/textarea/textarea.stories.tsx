import { argSizes } from '@/stories/Types/argSizes';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import Textarea from '@/ui/form/textarea/textarea';
import { argColors } from '@/stories/Types/argColors';
import Field from '@/ui/form/field/field';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Form/Textarea',
  component: Textarea as ComponentType,
  decorators: (Story) => (
    <div style={{ padding: '1rem' }} className='theme-light'>
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
    ...argColors,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    hover: false,
    focus: false,
    fixed: false,
    rows: 4,
    disabled: false,
    value: '',
    placeholder: 'Type something...',
  },
};

export const Colors: Story = {
  render: (args: object) => (
    <>
      <Field>
        <Textarea {...args} value='default' />
      </Field>
      <Field>
        <Textarea {...args} value='info' color='info' />
      </Field>
      <Field>
        <Textarea {...args} value='succcess' color='success' />
      </Field>
      <Field>
        <Textarea {...args} value='warning' color='warning' />
      </Field>
      <Field>
        <Textarea {...args} value='danger' color='danger' />
      </Field>
    </>
  ),
};

export const Sizes: Story = {
  render: (args: object) => (
    <>
      <Field>
        <Textarea {...args} value='small' scale='small' />
      </Field>
      <Field>
        <Textarea {...args} value='default' />
      </Field>
      <Field>
        <Textarea {...args} value='medium' scale='medium' />
      </Field>
      <Field>
        <Textarea {...args} value='large' scale='large' />
      </Field>
    </>
  ),
};

export const Loading: Story = {
  render: (args: object) => (
    <Field>
      <Textarea {...args} disabled value='loading' />
    </Field>
  ),
};
