import { ComponentType, JSX } from 'react';

import { argColors } from '@/stories/Types/argColors';
import { argInputSizes } from '@/stories/Types/argSizes';
import { ElementProps } from '@/ui/elements/generic/element.props';
import Field from '@/ui/form/field/field';
import Switch from '@/ui/form/switch/switch';
import { SwitchProps } from '@/ui/form/switch/switch.props';

import type { Meta, StoryObj } from '@storybook/react-vite';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Form/Switch',
  component: Switch as ComponentType<SwitchProps>,
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
    ...argInputSizes,
    ...argColors,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

type ArgsProps = SwitchProps &
  Omit<ElementProps<JSX.IntrinsicElements['input']>, 'nameOf' | 'as'>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <Switch {...args} name='radiostorybook'>
          Selected
        </Switch>
      </Field>
      <Field>
        <Switch {...args} isRounded name='radiostorybook'>
          Unselected
        </Switch>
      </Field>
    </>
  ),
};

export const Sizes: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <Switch {...args} name='radiostorybook2' inputSize='small'>
          Small
        </Switch>
      </Field>
      <Field>
        <Switch {...args} name='radiostorybook2'>
          Default
        </Switch>
      </Field>
      <Field>
        <Switch {...args} name='radiostorybook2' inputSize='medium'>
          Medium
        </Switch>
      </Field>
      <Field>
        <Switch {...args} name='radiostorybook2' inputSize='large'>
          Large
        </Switch>
      </Field>
    </>
  ),
};

export const Colors: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <Switch {...args} checked={true} name='default'>
          Small
        </Switch>
      </Field>
      <Field>
        <Switch {...args} checked={true} name='info' color='info'>
          Default
        </Switch>
      </Field>
      <Field>
        <Switch {...args} checked={true} name='succcess' color='success'>
          Medium
        </Switch>
      </Field>
      <Field>
        <Switch
          {...args}
          isRounded
          checked={true}
          name='warning'
          color='warning'
        >
          Large
        </Switch>
      </Field>
      <Field>
        <Switch {...args} isRounded checked={true} name='danger' color='danger'>
          Large
        </Switch>
      </Field>
    </>
  ),
};

export const Outlined: Story = {
  render: (args: ArgsProps) => (
    <>
      <Field>
        <Switch outlined {...args} checked={true} name='default'>
          Small
        </Switch>
      </Field>
      <Field>
        <Switch outlined {...args} checked={true} name='info' color='info'>
          Default
        </Switch>
      </Field>
      <Field>
        <Switch
          outlined
          {...args}
          checked={true}
          name='succcess'
          color='success'
        >
          Medium
        </Switch>
      </Field>
      <Field>
        <Switch
          outlined
          isRounded
          {...args}
          checked={true}
          name='warning'
          color='warning'
        >
          Large
        </Switch>
      </Field>
      <Field>
        <Switch
          outlined
          isRounded
          {...args}
          checked={true}
          name='danger'
          color='danger'
        >
          Large
        </Switch>
      </Field>
    </>
  ),
};
