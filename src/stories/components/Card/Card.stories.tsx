import Card from '@/ui/components/card/card';
import CardContent from '@/ui/components/card/content/content';
import CardImage from '@/ui/components/card/image/image';
import { Content } from '@/ui/elements/content/content';
import { Image } from '@/ui/elements/image/image';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentType } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Components/Card',
  component: Card as ComponentType,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    as: {
      options: ['div', 'section'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: (
      <>
        <CardImage>
          <Image
            ratio='4by3'
            src='https://bulma.io/assets/images/placeholders/1280x960.png'
            alt='Placeholder image'
          />
        </CardImage>
        <CardContent>
          <div className='media'>
            <div className='media-left'>
              <Image
                shape='48x48'
                src='https://bulma.io/assets/images/placeholders/96x96.png'
                alt='Placeholder image'
              />
            </div>
            <div className='media-content'>
              <p className='title is-4'>John Smith</p>
              <p className='subtitle is-6'>@johnsmith</p>
            </div>
          </div>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>. <a href='#'>#css</a>
            <a href='#'>#responsive</a>
            <br />
            <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
          </Content>
        </CardContent>
      </>
    ),
  },
};
