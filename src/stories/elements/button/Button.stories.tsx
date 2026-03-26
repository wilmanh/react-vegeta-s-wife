import { Button } from '@/ui/elements/button/button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ComponentType } from 'react';
import { Icon } from '@/ui/elements/icon/icon';
import { GrBug } from 'react-icons/gr';
import { argColors } from '@/stories/Types/argColors';
import { argLightness } from '@/stories/Types/argLightness';
import { argSizes } from '@/stories/Types/argSizes';
import { argResponsive } from '@/stories/Types/argResponsive';
import { argFullwidth } from '@/stories/Types/argFullwidth';
import { argStyles } from '@/stories/Types/argStyles';
import { argStates } from '@/stories/Types/argStates';
import { argLoading } from '@/stories/Types/argLoading';
import { argDisabled } from '@/stories/Types/argDisabled';
import { Buttons } from '@/ui/elements/buttons/buttons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Elements/Button',
  component: Button as ComponentType,
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
      options: ['submit', 'reset', 'a', 'button'],
    },
    ...argColors,
    ...argLightness,
    ...argSizes,
    ...argResponsive,
    ...argFullwidth,
    ...argStyles,
    ...argStates,
    ...argLoading,
    ...argDisabled,
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const BlackAndWhite: Story = {
  args: {
    children: 'Button',
  },
  render: (args: object) => (
    <Buttons>
      <Button {...args} color='white'>
        white
      </Button>
      <Button {...args} light>
        light
      </Button>
      <Button {...args} dark>
        dark
      </Button>
      <Button {...args} color='black'>
        black
      </Button>
      <Button {...args} color='text'>
        text
      </Button>
      <Button {...args} color='ghost'>
        ghost
      </Button>
    </Buttons>
  ),
};

export const Colors: Story = {
  render: (args: object) => (
    <Buttons>
      <Button focus fullwidth {...args} color='primary'>
        primary
      </Button>
      <Button {...args} color='link'>
        link
      </Button>
      <Button {...args} color='info'>
        info
      </Button>
      <Button {...args} color='success'>
        success
      </Button>
      <Button {...args} color='warning'>
        warning
      </Button>
      <Button {...args} color='danger'>
        danger
      </Button>
    </Buttons>
  ),
};

export const DarkColors: Story = {
  render: (args: object) => (
    <Buttons>
      <Button {...args} dark color='primary'>
        primary
      </Button>
      <Button {...args} dark color='link'>
        link
      </Button>
      <Button {...args} dark color='info'>
        info
      </Button>
      <Button {...args} dark color='success'>
        success
      </Button>
      <Button {...args} dark color='warning'>
        warning
      </Button>
      <Button {...args} dark color='danger'>
        danger
      </Button>
    </Buttons>
  ),
};

export const LightColors: Story = {
  render: (args: object) => (
    <Buttons>
      <Button {...args} light color='primary'>
        primary
      </Button>
      <Button {...args} light color='link'>
        link
      </Button>
      <Button {...args} light color='info'>
        info
      </Button>
      <Button {...args} light color='success'>
        success
      </Button>
      <Button {...args} light color='warning'>
        warning
      </Button>
      <Button {...args} light color='danger'>
        danger
      </Button>
    </Buttons>
  ),
};

export const Sizes: Story = {
  render: (args: object) => (
    <Buttons style={{ gap: 20 }}>
      <Button {...args} scale='small'>
        small
      </Button>
      <Button {...args}>Default</Button>
      <Button {...args} scale='normal'>
        normal
      </Button>
      <Button {...args} scale='medium'>
        medium
      </Button>
      <Button {...args} scale='large'>
        large
      </Button>
    </Buttons>
  ),
};

export const Styles: Story = {
  render: (args: object) => (
    <Buttons>
      <Button {...args} outlined color='primary'>
        outlined
      </Button>
      <Button {...args} inverted color='primary'>
        inverted
      </Button>
      <Button {...args} rounded color='primary'>
        rounded
      </Button>
    </Buttons>
  ),
};

export const States: Story = {
  args: {
    children: 'Button',
  },
  render: (args: object) => (
    <Buttons>
      <Button {...args} color='primary'>
        normal
      </Button>
      <Button {...args} active color='primary'>
        active
      </Button>
      <Button {...args} hover color='primary'>
        hover
      </Button>
      <Button {...args} focus color='primary'>
        focus
      </Button>
      <Button {...args} loading color='primary'>
        focus
      </Button>
      <Button {...args} static color='primary'>
        static
      </Button>
      <Button {...args} disabled color='primary'>
        disabled
      </Button>
    </Buttons>
  ),
};

export const WithIcons: Story = {
  render: (args: object) => (
    <Buttons>
      <Button {...args} color='primary'>
        <Icon>
          <GrBug />
        </Icon>
      </Button>
      <Button {...args} color='info'>
        <span>Bug</span>
        <Icon>
          <GrBug />
        </Icon>
      </Button>
      <Button {...args} color='success'>
        <Icon>
          <GrBug />
        </Icon>
        <span>Bug</span>
      </Button>
    </Buttons>
  ),
};
