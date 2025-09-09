import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ComponentType } from 'react';
import Media from '@/ui/layout/media/media';
import MediaLeft from '@/ui/layout/media/left/mediaLeft';
import MediaContent from '@/ui/layout/media/content/mediaContent';
import MediaRight from '@/ui/layout/media/right/mediaRight';
import { Image } from '@/ui/elements/image/image';
import { Content } from '@/ui/elements/content/content';
import { Subtitle } from '@/ui/elements/headings/subtitle/subtitle';
import Level from '@/ui/layout/level/level';
import LevelLeft from '@/ui/layout/level/left/levelLeft';
import LevelItem from '@/ui/layout/level/item/levelItem';
import { Icon } from '@/ui/elements/icon/icon';
import { Delete } from '@/ui/elements/delete/delete';
import Field from '@/ui/form/field/field';
import Control from '@/ui/form/control/control';
import Textarea from '@/ui/form/textarea/textarea';
import LevelRight from '@/ui/layout/level/right/levelRight';
import { Button } from '@/ui/elements/button/button';
import Checkbox from '@/ui/form/checkbox/checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Layout/Media',
  component: Media as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Media>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <MediaLeft>
          <Image
            src='https://bulma.io/assets/images/placeholders/128x128.png'
            shape='64x64'
          ></Image>
        </MediaLeft>
        <MediaContent>
          <Content>
            <Subtitle hSize='6'>
              <strong>John Smith</strong> <small>@johnsmith</small>{' '}
              <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </Subtitle>
          </Content>
          <Level mobile>
            <LevelLeft>
              <LevelItem>
                <Icon size='small'>
                  <i className='fas fa-reply'></i>
                </Icon>
              </LevelItem>
              <LevelItem>
                <Icon size='small'>
                  <i className='fas fa-retweet'></i>
                </Icon>
              </LevelItem>
              <LevelItem>
                <Icon size='small'>
                  <i className='fas fa-heart'></i>
                </Icon>
              </LevelItem>
            </LevelLeft>
          </Level>
        </MediaContent>
        <MediaRight>
          <Delete />
        </MediaRight>
      </>
    ),
  },
};

export const Default2: Story = {
  args: {
    children: (
      <>
        <MediaLeft>
          <Image
            src='https://bulma.io/assets/images/placeholders/128x128.png'
            shape='64x64'
          ></Image>
        </MediaLeft>
        <MediaContent>
          <Field>
            <Control>
              <Textarea placeholder='Add a comment...' />
            </Control>
          </Field>
          <Level>
            <LevelLeft>
              <LevelItem>
                <Button color='primary'>Submit</Button>
              </LevelItem>
            </LevelLeft>
            <LevelRight>
              <LevelItem>
                <Checkbox>Press enter to submit</Checkbox>
              </LevelItem>
            </LevelRight>
          </Level>
        </MediaContent>
      </>
    ),
  },
};

export const Nesting: Story = {
  args: {
    children: (
      <>
        <MediaLeft>
          <Image
            src='https://bulma.io/assets/images/placeholders/128x128.png'
            shape='64x64'
          ></Image>
        </MediaLeft>
        <MediaContent>
          <Content className='is-color-text-black'>
            <Subtitle hSize='6'>
              <strong>Barbara Middleton</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              porta eros lacus, nec ultricies elit blandit non. Suspendisse
              pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus
              turpis.
              <br />
              <small>
                <a>Like</a> · <a>Reply</a> · 3 hrs
              </small>
            </Subtitle>
          </Content>
          <Media>
            <MediaLeft>
              <Image
                src='https://bulma.io/assets/images/placeholders/128x128.png'
                shape='64x64'
              ></Image>
            </MediaLeft>
            <MediaContent>
              <Content>
                <Subtitle hSize='6'>
                  <strong>Sean Brown</strong>
                  <br />
                  Donec sollicitudin urna eget eros malesuada sagittis.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam blandit nisl a
                  nulla sagittis, a lobortis leo feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </Subtitle>
              </Content>
              <Media>
                <Subtitle hSize='6'>
                  Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi
                  eu lorem cursus ullamcorper sit amet nec massa.
                </Subtitle>
              </Media>
              <Media>
                <Subtitle hSize='6'>
                  Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                  Praesent malesuada metus sed pharetra euismod. Cras tellus
                  odio, tincidunt iaculis diam non, porta aliquet tortor.
                </Subtitle>
              </Media>
            </MediaContent>
          </Media>
          <Media>
            <MediaLeft>
              <Image
                src='https://bulma.io/assets/images/placeholders/128x128.png'
                shape='64x64'
              ></Image>
            </MediaLeft>
            <MediaContent>
              <Content>
                <Subtitle hSize='6'>
                  <strong>Kayli Eunice </strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis
                  vel. Maecenas varius felis sit amet magna vestibulum euismod
                  malesuada cursus libero. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae;
                  Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </Subtitle>
              </Content>
            </MediaContent>
          </Media>
        </MediaContent>
      </>
    ),
  },
};
