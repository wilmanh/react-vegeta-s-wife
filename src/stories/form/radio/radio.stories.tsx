import { ComponentType, JSX } from 'react';

import { Color } from '@/logic/interfaces/props/color';
import { Size } from '@/logic/interfaces/props/size';
import { argColors } from '@/stories/Types/argColors';
import { argSizes } from '@/stories/Types/argSizes';
import { ElementProps } from '@/ui/elements/generic/element.props';
import Field from '@/ui/form/field/field';
import Radio from '@/ui/form/radio/radio';

import type { Meta, StoryObj } from '@storybook/react-vite';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Form/Radio',
  component: Radio as ComponentType,
  decorators: (Story) => (
    <div style={{ padding: '1rem' }} className='theme-dark'>
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

type ArgsProps = Color &
  Size &
  Omit<ElementProps<JSX.IntrinsicElements['input']>, 'nameOf' | 'as'>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <Radio {...args} name='radiostorybook'>
          Selected
        </Radio>
      </Field>
      <Field>
        <Radio {...args} name='radiostorybook'>
          Unselected
        </Radio>
      </Field>
    </>
  ),
};

export const Sizes: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <Radio {...args} name='radiostorybook2' scale='small'>
          Small
        </Radio>
      </Field>
      <Field>
        <Radio {...args} name='radiostorybook2'>
          Default
        </Radio>
      </Field>
      <Field>
        <Radio {...args} name='radiostorybook2' scale='medium'>
          Medium
        </Radio>
      </Field>
      <Field>
        <Radio {...args} name='radiostorybook2' scale='large'>
          Large
        </Radio>
      </Field>
    </>
  ),
};

export const Colors: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <Radio {...args} checked={true} name='default'>
          Small
        </Radio>
      </Field>
      <Field>
        <Radio {...args} checked={true} name='info' color='info'>
          Default
        </Radio>
      </Field>
      <Field>
        <Radio {...args} checked={true} name='succcess' color='success'>
          Medium
        </Radio>
      </Field>
      <Field>
        <Radio {...args} checked={true} name='warning' color='warning'>
          Large
        </Radio>
      </Field>
      <Field>
        <Radio {...args} checked={true} name='danger' color='danger'>
          Large
        </Radio>
      </Field>
    </>
  ),
};
