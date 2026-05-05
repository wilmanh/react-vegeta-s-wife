import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';

import { fn } from 'storybook/test';

import { Button } from '@/ui/elements/button/button';
import { Subtitle } from '@/ui/elements/headings/subtitle/subtitle';
import { Title } from '@/ui/elements/headings/title/title';
import { Image } from '@/ui/elements/image/image';
import Control from '@/ui/form/control/control';
import Field from '@/ui/form/field/field';
import Input from '@/ui/form/input/input';
import LevelItem from '@/ui/layout/level/item/levelItem';
import LevelLeft from '@/ui/layout/level/left/levelLeft';
import Level from '@/ui/layout/level/level';
import LevelRight from '@/ui/layout/level/right/levelRight';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Layout/Level',
  component: Level as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Level>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <LevelLeft>
          <LevelItem>
            <Subtitle>
              <strong>123</strong> posts
            </Subtitle>
          </LevelItem>
          <LevelItem>
            <Field addons>
              <Control>
                <Input type='text' placeholder='Search' />
              </Control>
              <Control>
                <Button>Search</Button>
              </Control>
            </Field>
          </LevelItem>
        </LevelLeft>
        <LevelRight>
          <LevelItem>
            <Subtitle hSize={6}>
              <strong>All</strong>
            </Subtitle>
          </LevelItem>
          <LevelItem>
            <a>Published</a>
          </LevelItem>
          <LevelItem>
            <a>Drafts</a>
          </LevelItem>
          <LevelItem>
            <a>Deleted</a>
          </LevelItem>
          <LevelItem>
            <Button color='info'>New</Button>
          </LevelItem>
        </LevelRight>
      </>
    ),
  },
};

export const CenteredLevel: Story = {
  args: {
    children: (
      <>
        <LevelItem textCentered>
          <div>
            <p className='heading'>Tweets</p>
            <Title>3,456</Title>
          </div>
        </LevelItem>
        <LevelItem textCentered>
          <div>
            <p className='heading'>Following</p>
            <Title>123</Title>
          </div>
        </LevelItem>
        <LevelItem textCentered>
          <div>
            <p className='heading'>Followers</p>
            <Title>456K</Title>
          </div>
        </LevelItem>
        <LevelItem textCentered>
          <div>
            <p className='heading'>Likes</p>
            <Title>789</Title>
          </div>
        </LevelItem>
      </>
    ),
  },
};

export const CenteredLevel2: Story = {
  args: {
    children: (
      <>
        <LevelItem textCentered>
          <a className='link is-info'>Home</a>
        </LevelItem>
        <LevelItem textCentered>
          <a className='link is-info'>Menu</a>
        </LevelItem>
        <LevelItem textCentered>
          <Image
            src='https://bulma.io/assets/images/bulma-type.png'
            alt=''
            style={{ height: '30px' }}
          />
        </LevelItem>

        <LevelItem textCentered>
          <a className='link is-info'>Resevations</a>
        </LevelItem>
        <LevelItem textCentered>
          <a className='link is-info'>Contact</a>
        </LevelItem>
      </>
    ),
  },
};

export const Mobile: Story = {
  args: {
    mobile: true,
    children: (
      <>
        <LevelItem textCentered>
          <div>
            <p className='heading'>Tweets</p>
            <Title>3,456</Title>
          </div>
        </LevelItem>
        <LevelItem textCentered>
          <div>
            <p className='heading'>Following</p>
            <Title>123</Title>
          </div>
        </LevelItem>
        <LevelItem textCentered>
          <div>
            <p className='heading'>Followers</p>
            <Title>456K</Title>
          </div>
        </LevelItem>
        <LevelItem textCentered>
          <div>
            <p className='heading'>Likes</p>
            <Title>789</Title>
          </div>
        </LevelItem>
      </>
    ),
  },
};
