import { argColors } from '@/stories/Types/argColors';
import { argSizes } from '@/stories/Types/argSizes';
import { Tag } from '@/ui/elements/tag/tag';
import { Delete as Del } from '@/ui/elements/delete/delete';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
import { Tags } from '@/ui/elements/tags/tags';
import { TagProps } from '@/ui/elements/tag/tag.props';
import { JSX } from 'react/jsx-runtime';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Elements/Tag',
  component: Tag as ComponentType,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: { ...argColors, ...argSizes },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Tags',
  },
};

type ArgsProps = JSX.IntrinsicAttributes &
  ((
    | DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
    | DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >
    | DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    | DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >
  ) &
    TagProps);

export const BlackAndWhite: Story = {
  render: (args: ArgsProps) => (
    <Tags>
      <Tag {...args} color='white'>
        white
      </Tag>
      <Tag {...args} light>
        light
      </Tag>
      <Tag {...args} dark>
        dark
      </Tag>
      <Tag {...args} color='black'>
        black
      </Tag>
      <Tag {...args} color='text'>
        text
      </Tag>
      <Tag {...args} color='ghost'>
        ghost
      </Tag>
    </Tags>
  ),
};

export const Colors: Story = {
  render: (args: ArgsProps) => (
    <Tags>
      <Tag {...args} color='primary'>
        primary
      </Tag>
      <Tag {...args} color='link'>
        link
      </Tag>
      <Tag {...args} color='info'>
        info
      </Tag>
      <Tag {...args} color='success'>
        success
      </Tag>
      <Tag {...args} color='warning'>
        warning
      </Tag>
      <Tag {...args} color='danger'>
        danger
      </Tag>
    </Tags>
  ),
};

export const LightColors: Story = {
  render: (args: ArgsProps) => (
    <Tags>
      <Tag {...args} light color='primary'>
        primary
      </Tag>
      <Tag {...args} light color='link'>
        link
      </Tag>
      <Tag {...args} light color='info'>
        info
      </Tag>
      <Tag {...args} light color='success'>
        success
      </Tag>
      <Tag {...args} light color='warning'>
        warning
      </Tag>
      <Tag {...args} light color='danger'>
        danger
      </Tag>
    </Tags>
  ),
};

export const Sizes: Story = {
  render: (args: ArgsProps) => (
    <Tags style={{ gap: 18 }}>
      <Tag {...args} size='small'>
        small
      </Tag>
      <Tag {...args}>Default</Tag>
      <Tag {...args} size='medium'>
        medium
      </Tag>
      <Tag {...args} size='large'>
        large
      </Tag>
    </Tags>
  ),
};

export const Styles: Story = {
  render: (args: ArgsProps) => (
    <Tags>
      <Tag {...args} rounded color='primary'>
        rounded
      </Tag>
    </Tags>
  ),
};

export const Delete: Story = {
  render: (args: ArgsProps) => (
    <Tags>
      <Tag {...args} color='primary'>
        Delete
        <Del size='small' />
      </Tag>
    </Tags>
  ),
};

export const TagsAddons: Story = {
  render: () => (
    <div className='field is-grouped is-grouped-multiline'>
      <div className='control'>
        <Tags addons>
          <Tag color='danger'>Delete</Tag>
          <Tag as='a' deleted></Tag>
        </Tags>
        <Tags addons>
          <Tag color='warning'>Warning</Tag>
          <Tag color='primary'>Delete</Tag>
        </Tags>
      </div>
    </div>
  ),
};
