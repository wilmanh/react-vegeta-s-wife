import { argSizes } from '@/stories/Types/argSizes';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType, JSX } from 'react';
import { argColors } from '../Types/argColors';
import { Color } from '@/logic/interfaces/props/color';
import { Size } from '@/logic/interfaces/props/size';
import { ElementProps } from '@/logic/interfaces/props/element';
import Checkbox from '@/ui/form/checkbox/checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Form/Checkbox',
  component: Checkbox as ComponentType,
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
} satisfies Meta<typeof Checkbox>;

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
        <Checkbox {...args} name='radiostorybook'>
          Selected
        </Checkbox>
      </div>
      <div className='field'>
        <Checkbox {...args} name='radiostorybook'>
          Unselected
        </Checkbox>
      </div>
      {/* <div className='field'>
        <label className='switch'>
          <input type='checkbox' />
          <span className='check'></span>
          <span className='control-label'></span>
        </label>
      </div> */}
      <div className='field'>
        <label className='b-checkbox checkbox'>
          <input type='checkbox' />
          <span className='check'></span>
          <span className='control-label'>Basic</span>
        </label>
      </div>
    </>
  ),
};

export const Sizes: Story = {
  render: (args: ArgsProps) => (
    <>
      <div className='field'>
        <Checkbox {...args} name='radiostorybook2' size='small'>
          Small
        </Checkbox>
      </div>
      <div className='field'>
        <Checkbox {...args} name='radiostorybook2'>
          Deafault
        </Checkbox>
      </div>
      <div className='field'>
        <Checkbox {...args} name='radiostorybook2' size='medium'>
          Medium
        </Checkbox>
      </div>
      <div className='field'>
        <Checkbox {...args} name='radiostorybook2' size='large'>
          Large
        </Checkbox>
      </div>
    </>
  ),
};

export const Colors: Story = {
  render: (args: ArgsProps) => (
    <>
      <div className='field'>
        <Checkbox {...args} checked name='default'>
          Small
        </Checkbox>
      </div>
      <div className='field'>
        <Checkbox {...args} checked name='info' color='info'>
          Deafault
        </Checkbox>
      </div>
      <div className='field'>
        <Checkbox {...args} checked name='succcess' color='success'>
          Medium
        </Checkbox>
      </div>
      <div className='field'>
        <Checkbox {...args} checked name='warning' color='warning'>
          Large
        </Checkbox>
      </div>
      <div className='field'>
        <Checkbox {...args} checked name='danger' color='danger'>
          Large
        </Checkbox>
      </div>
    </>
  ),
};
