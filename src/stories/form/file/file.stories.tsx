import { argSizes } from '@/stories/Types/argSizes';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import File from '@/ui/form/file/file';
import { FileProps } from '@/ui/form/file/file.props';
import { argColors } from '@/stories/Types/argColors';
import Field from '@/ui/form/field/field';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Form/File',
  component: File as ComponentType,
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
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    label: 'Choose a file...',
  },
};

export const WithName: Story = {
  args: {
    label: 'Choose a file...',
    name: 'Testing.txt',
  },
};

export const Right: Story = {
  args: {
    label: 'Choose a file...',
    name: 'Testing.txt',
    right: true,
  },
};

export const Fullwidth: Story = {
  args: {
    label: 'Choose a file...',
    name: 'Testing.txt',
    fullwidth: true,
  },
};

export const Boxed: Story = {
  args: {
    label: 'Choose a file...',
    boxed: true,
  },
};

export const BoxedWithName: Story = {
  args: {
    label: 'Choose a file...',
    boxed: true,
    name: 'Testing.txt',
  },
};

type ArgsProps = FileProps;

export const Colors: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <File {...args} name='default' />
      </Field>
      <Field>
        <File {...args} boxed name='info' color='info' />
      </Field>
      <Field>
        <File {...args} name='succcess' color='success' />
      </Field>
      <Field>
        <File {...args} name='warning' color='warning' />
      </Field>
      <Field>
        <File {...args} name='danger' color='danger' />
      </Field>
    </>
  ),
};

export const Sizes: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <File {...args} name='default' size={'small'} />
      </Field>
      <Field>
        <File {...args} name='warning' />
      </Field>
      <Field>
        <File {...args} name='warning' size={'medium'} />
      </Field>
      <Field>
        <File {...args} name='danger' size={'large'} />
      </Field>
      <Field>
        <File {...args} boxed name='info' size={'large'} />
      </Field>
    </>
  ),
};
