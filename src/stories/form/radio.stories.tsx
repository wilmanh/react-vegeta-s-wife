import { argSizes } from '@/stories/Types/argSizes';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType, JSX } from 'react';
import { argColors } from '../Types/argColors';
import Radio from '@/ui/form/radio/radio';
import { Color } from '@/logic/interfaces/props/color';
import { Size } from '@/logic/interfaces/props/size';
import { ElementProps } from '@/logic/interfaces/props/element';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Form/Radio',
  component: Radio as ComponentType,
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
} satisfies Meta<typeof Radio>;

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
        <Radio {...args} name='radiostorybook'>
          Selected
        </Radio>
      </div>
      <div className='field'>
        <Radio {...args} name='radiostorybook'>
          Unselected
        </Radio>
      </div>
    </>
  ),
};

export const Sizes: Story = {
  render: (args: ArgsProps) => (
    <>
      <div className='field'>
        <Radio {...args} name='radiostorybook2' size='small'>
          Small
        </Radio>
      </div>
      <div className='field'>
        <Radio {...args} name='radiostorybook2'>
          Deafault
        </Radio>
      </div>
      <div className='field'>
        <Radio {...args} name='radiostorybook2' size='medium'>
          Medium
        </Radio>
      </div>
      <div className='field'>
        <Radio {...args} name='radiostorybook2' size='large'>
          Large
        </Radio>
      </div>
    </>
  ),
};

export const Colors: Story = {
  render: (args: ArgsProps) => (
    <>
      <div className='field'>
        <Radio {...args} checked name='default'>
          Small
        </Radio>
      </div>
      <div className='field'>
        <Radio {...args} checked name='info' color='info'>
          Deafault
        </Radio>
      </div>
      <div className='field'>
        <Radio {...args} checked name='succcess' color='success'>
          Medium
        </Radio>
      </div>
      <div className='field'>
        <Radio {...args} checked name='warning' color='warning'>
          Large
        </Radio>
      </div>
      <div className='field'>
        <Radio {...args} checked name='danger' color='danger'>
          Large
        </Radio>
      </div>
    </>
  ),
};
