import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ComponentType } from 'react';
import Hero from '@/ui/layout/hero/hero';
import HeroBody from '@/ui/layout/hero/hero.body';
import { Title } from '@/ui/elements/headings/title/title';
import { Subtitle } from '@/ui/elements/headings/subtitle/subtitle';
import Navbar from '@/ui/components/navbar/navbar';
import Container from '@/ui/layout/container/container';
import NavbarMenu from '@/ui/components/navbar/navbarMenu/navbarMenu';
import NavbarStart from '@/ui/components/navbar/navbarStart/navbarStart';
import NavbarItem from '@/ui/components/navbar/navbarItem/navbarItem';
import NavbarEnd from '@/ui/components/navbar/navbarEnd/navbarEnd';
import { Buttons } from '@/ui/elements/buttons/buttons';
import { Button } from '@/ui/elements/button/button';
import HeroHeader from '@/ui/layout/hero/hero.header';
import NavbarBrand from '@/ui/components/navbar/navbarBrand/navbarBrand';
import NavbarBurger from '@/ui/components/navbar/navbarBurger/navbarBurger';
import HeroFooter from '@/ui/layout/hero/hero.footer';
import Tab from '@/ui/components/tabs/tab/tabsTab';
import Tabs from '@/ui/components/tabs/tabs';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Layout/Hero',
  component: Hero as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <HeroBody>
        <Title>Hero Title</Title>
        <Subtitle>Hero Subtitle</Subtitle>
      </HeroBody>
    ),
  },
};

export const ColorPrimary: Story = {
  args: {
    color: 'primary',
    children: (
      <HeroBody>
        <Title>Hero Title</Title>
        <Subtitle>Hero Subtitle</Subtitle>
      </HeroBody>
    ),
  },
};

export const ColorLink: Story = {
  args: {
    color: 'link',
    children: (
      <HeroBody>
        <Title>Hero Title</Title>
        <Subtitle>Hero Subtitle</Subtitle>
      </HeroBody>
    ),
  },
};

export const ColorInfo: Story = {
  args: {
    color: 'info',
    children: (
      <HeroBody>
        <Title>Hero Title</Title>
        <Subtitle>Hero Subtitle</Subtitle>
      </HeroBody>
    ),
  },
};

export const ColorSuccess: Story = {
  args: {
    color: 'success',
    children: (
      <HeroBody>
        <Title>Hero Title</Title>
        <Subtitle>Hero Subtitle</Subtitle>
      </HeroBody>
    ),
  },
};

export const ColorWarning: Story = {
  args: {
    color: 'warning',
    children: (
      <HeroBody>
        <Title>Hero Title</Title>
        <Subtitle>Hero Subtitle</Subtitle>
      </HeroBody>
    ),
  },
};

export const ColorDanger: Story = {
  args: {
    color: 'danger',
    children: (
      <HeroBody>
        <Title>Hero Title</Title>
        <Subtitle>Hero Subtitle</Subtitle>
      </HeroBody>
    ),
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
    color: 'info',
    children: (
      <HeroBody>
        <Title>Hero Title</Title>
        <Subtitle>Hero Subtitle</Subtitle>
      </HeroBody>
    ),
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
    color: 'info',
    children: (
      <HeroBody>
        <Title>Hero Title</Title>
        <Subtitle>Hero Subtitle</Subtitle>
      </HeroBody>
    ),
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
    color: 'info',
    children: (
      <HeroBody>
        <Title>Hero Title</Title>
        <Subtitle>Hero Subtitle</Subtitle>
      </HeroBody>
    ),
  },
};

export const SizeHalfheight: Story = {
  args: {
    size: 'halfheight',
    color: 'info',
    children: (
      <HeroBody>
        <div>
          <Title>Hero Title</Title>
          <Subtitle>Hero Subtitle</Subtitle>
        </div>
      </HeroBody>
    ),
  },
};

export const SizeFullheight: Story = {
  args: {
    size: 'fullheight',
    color: 'info',
    children: (
      <HeroBody>
        <div>
          <Title>Hero Title</Title>
          <Subtitle>Hero Subtitle</Subtitle>
        </div>
      </HeroBody>
    ),
  },
};

export const WithNavbar: Story = {
  render: () => {
    return (
      <>
        <Navbar>
          <Container>
            <NavbarMenu>
              <NavbarStart>
                <NavbarItem>Home</NavbarItem>
                <NavbarItem>Documentation</NavbarItem>
              </NavbarStart>
            </NavbarMenu>
            <NavbarEnd>
              <NavbarItem>
                <Buttons>
                  <Button dark>Github</Button>
                  <Button color='link'>Download</Button>
                </Buttons>
              </NavbarItem>
            </NavbarEnd>
          </Container>
        </Navbar>
        <Hero as={'section'} color='info' withNavbar>
          <HeroBody>
            <Container>
              <Title>Hero with Navbar</Title>
              <Subtitle>
                This hero is fullheight minus the height of the navbar.
              </Subtitle>
            </Container>
          </HeroBody>
        </Hero>
      </>
    );
  },
};

export const FullHeighIn3Parts: Story = {
  render: () => {
    return (
      <>
        <Hero as={'section'} color='warning' size='medium'>
          <HeroHeader>
            <Navbar>
              <Container fluid>
                <NavbarBrand>
                  <NavbarItem>
                    <img
                      src='https://bulma.io/assets/images/bulma-type-white.png'
                      alt='Logo'
                    />
                  </NavbarItem>
                  <NavbarBurger />
                </NavbarBrand>
                <NavbarMenu>
                  <NavbarEnd>
                    <NavbarItem>
                      <Buttons>
                        <Button dark>Github</Button>
                        <Button color='link'>Download</Button>
                      </Buttons>
                    </NavbarItem>
                  </NavbarEnd>
                </NavbarMenu>
              </Container>
            </Navbar>
          </HeroHeader>
          <HeroBody>
            <Container>
              <Title>Hero with Navbar</Title>
              <Subtitle>
                This hero is fullheight minus the height of the navbar.
              </Subtitle>
            </Container>
          </HeroBody>
          <HeroFooter>
            <Tabs boxed fullwidth>
              <Tab active>Pictures</Tab>
              <Tab>Music</Tab>
              <Tab>Videos</Tab>
              <Tab>Documents</Tab>
            </Tabs>
          </HeroFooter>
        </Hero>
      </>
    );
  },
};
