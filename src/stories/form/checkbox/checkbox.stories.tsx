import { ComponentType, JSX } from 'react';

import { argColors } from '@/stories/Types/argColors';
import { argSizes } from '@/stories/Types/argSizes';
import { ElementProps } from '@/ui/elements/generic/element.props';
import Checkbox from '@/ui/form/checkbox/checkbox';
import Field from '@/ui/form/field/field';
import { SwitchProps } from '@/ui/form/switch/switch.props';

import type { Meta, StoryObj } from '@storybook/react-vite';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Form/Checkbox',
  component: Checkbox as ComponentType,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

type ArgsProps = SwitchProps &
  Omit<ElementProps<JSX.IntrinsicElements['input']>, 'nameOf' | 'as'>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <Checkbox {...args} name='radiostorybook'>
          Selected
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} name='radiostorybook'>
          Unselected
        </Checkbox>
      </Field>
    </>
  ),
};

export const Sizes: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <Checkbox {...args} inputSize={'small'} name='radiostorybook2'>
          Small
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} name='radiostorybook2'>
          Default
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} name='radiostorybook2' inputSize='medium'>
          Medium
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} name='radiostorybook2' inputSize='large'>
          Large
        </Checkbox>
      </Field>
    </>
  ),
};

export const Colors: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <Checkbox {...args} checked={true} name='default'>
          Small
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} checked={true} name='info' color='info'>
          Default
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} checked={true} name='succcess' color='success'>
          Medium
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} checked={true} name='warning' color='warning'>
          Large
        </Checkbox>
      </Field>
      <Field>
        <Checkbox {...args} checked={true} name='danger' color='danger'>
          Large
        </Checkbox>
      </Field>
    </>
  ),
};
