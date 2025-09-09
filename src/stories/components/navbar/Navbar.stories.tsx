import { argColors } from '@/stories/Types/argColors';
import Navbar from '@/ui/components/navbar/navbar';
import NavbarBrand from '@/ui/components/navbar/navbarBrand/navbarBrand';
import NavbarBurger from '@/ui/components/navbar/navbarBurger/navbarBurger';
import NavbarDivider from '@/ui/components/navbar/navbarDivider/navbarDivider';
import NavbarDropdown from '@/ui/components/navbar/navbarDropdown/navbarDropdown';
import NavbarEnd from '@/ui/components/navbar/navbarEnd/navbarEnd';
import NavbarItem from '@/ui/components/navbar/navbarItem/navbarItem';
import NavbarLink from '@/ui/components/navbar/navbarLink/navbarLink';
import NavbarMenu from '@/ui/components/navbar/navbarMenu/navbarMenu';
import NavbarStart from '@/ui/components/navbar/navbarStart/navbarStart';
import { Button } from '@/ui/elements/button/button';
import { Buttons } from '@/ui/elements/buttons/buttons';
import { Image } from '@/ui/elements/image/image';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType, useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Components/Navbar',
  component: Navbar as ComponentType,
  decorators: (Story) => (
    <div style={{ marginTop: '10rem' }} className='theme-light'>
      <Story />
    </div>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argColors,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const BurgerWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const [active, setActive] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    setActive(!active);
  };
  return (
    <>
      <NavbarBrand>
        <NavbarItem href='https://bulma.io'>
          <Image
            src='https://bulma.io/assets/images/made-with-bulma.png'
            alt='Made with Bulma'
            width='128'
            height='24'
          />
        </NavbarItem>
        <NavbarBurger
          onClick={handleOnChange}
          active={active}
          data-target='navbarBasicExample'
        />
      </NavbarBrand>
      <NavbarMenu active={active} id='navbarBasicExample'>
        <NavbarStart>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>Documentation</NavbarItem>
          <NavbarItem as={'div'} dropdown hoverable>
            <NavbarLink arrowless>More</NavbarLink>
            <NavbarDropdown boxed>
              <NavbarItem>About</NavbarItem>
              <NavbarItem selected>Jobs</NavbarItem>
              <NavbarItem>Contact</NavbarItem>
              <NavbarDivider />
              <NavbarItem>Report an issue</NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem>
            <Buttons>
              <Button color='primary'>Sign Up</Button>
              <Button>Log In</Button>
            </Buttons>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    spaced: false,
    shadow: false,
    fixed: 'top',
    transparent: false,
    children: <BurgerWithHooks />,
  },
};
