import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Icon } from '@/ui/elements/icon/icon';
import { GrBug } from 'react-icons/gr';
import { ComponentType } from 'react';
import { IconProps } from '@/ui/elements/icon/icon.props';
import { argTextColors } from '@/stories/Types/argColors';
import { argSizes } from '@/stories/Types/argSizes';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Elements/Icon',
  component: Icon as ComponentType,
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
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'span'],
    },
    ...argTextColors,
    ...argSizes,
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args: IconProps) => (
    <Icon {...args}>
      <GrBug size={args.size} />
    </Icon>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div className='buttons'>
      <Icon {...args} size={'large'} textColor='primary'>
        <GrBug size={'large'} />
      </Icon>
      <Icon {...args} size={'large'} textColor='link'>
        <GrBug size={'large'} />
      </Icon>
      <Icon {...args} size={'large'} textColor='info'>
        <GrBug size={'large'} />
      </Icon>
      <Icon {...args} size={'large'} textColor='success'>
        <GrBug size={'large'} />
      </Icon>
      <Icon {...args} size={'large'} textColor='warning'>
        <GrBug size={'large'} />
      </Icon>
      <Icon {...args} size={'large'} textColor='danger'>
        <GrBug size={'large'} />
      </Icon>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className='buttons'>
      <Icon as={'div'} text textColor='primary'>
        <Icon textColor='primary'>
          <GrBug />
        </Icon>
        <span>Text</span>
      </Icon>
    </div>
  ),
};
