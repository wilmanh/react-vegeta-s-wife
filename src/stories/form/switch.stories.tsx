import { argSizes } from '@/stories/Types/argSizes';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType, JSX } from 'react';
import { argColors } from '../Types/argColors';
import { Color } from '@/logic/interfaces/props/color';
import { Size } from '@/logic/interfaces/props/size';
import { ElementProps } from '@/logic/interfaces/props/element';
import Switch from '@/ui/form/switch/switch';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Form/Switch',
  component: Switch as ComponentType,
  decorators: (Story) => (
    <div style={{ margin: '1rem' }} className='theme-dark'>
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

type ArgsProps = Color &
  Size &
  JSX.IntrinsicElements['input'] &
  Omit<ElementProps, 'nameOf' | 'as'>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args: ArgsProps) => (
    <>
      <div className='field'>
        <Switch {...args} name='radiostorybook'>
          Selected
        </Switch>
      </div>
      <div className='field'>
        <Switch {...args} isRounded name='radiostorybook'>
          Unselected
        </Switch>
      </div>
    </>
  ),
};

export const Sizes: Story = {
  render: (args: ArgsProps) => (
    <>
      <div className='field'>
        <Switch {...args} name='radiostorybook2' size='small'>
          Small
        </Switch>
      </div>
      <div className='field'>
        <Switch {...args} name='radiostorybook2'>
          Deafault
        </Switch>
      </div>
      <div className='field'>
        <Switch {...args} name='radiostorybook2' size='medium'>
          Medium
        </Switch>
      </div>
      <div className='field'>
        <Switch {...args} name='radiostorybook2' size='large'>
          Large
        </Switch>
      </div>
    </>
  ),
};

export const Colors: Story = {
  render: (args: ArgsProps) => (
    <>
      <div className='field'>
        <Switch {...args} checked name='default'>
          Small
        </Switch>
      </div>
      <div className='field'>
        <Switch {...args} checked name='info' color='info'>
          Deafault
        </Switch>
      </div>
      <div className='field'>
        <Switch {...args} checked name='succcess' color='success'>
          Medium
        </Switch>
      </div>
      <div className='field'>
        <Switch {...args} checked name='warning' color='warning'>
          Large
        </Switch>
      </div>
      <div className='field'>
        <Switch {...args} checked name='danger' color='danger'>
          Large
        </Switch>
      </div>
    </>
  ),
};
