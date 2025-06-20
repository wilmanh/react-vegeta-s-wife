import Menu from '@/ui/components/menu/menu';
import MenuLabel from '@/ui/components/menu/menu-label/menu-label';
import MenuItem from '@/ui/components/menu/menu-list/menu-item/menu-item';
import MenuList from '@/ui/components/menu/menu-list/menu-list';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Components/Menu',
  component: Menu as ComponentType,
  decorators: (Story) => (
    <div className='theme-light' style={{ width: '600px' }}>
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
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    children: (
      <>
        <MenuLabel>General</MenuLabel>
        <MenuList>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Customers</MenuItem>
        </MenuList>
        <MenuLabel>Administration</MenuLabel>
        <MenuList>
          <MenuItem>Team Settings</MenuItem>
          <MenuItem active>
            Manage Your Team
            <ul>
              <li>
                <a>Members</a>
              </li>
              <li>
                <a>Plugins</a>
              </li>
              <li>
                <a>Add a member</a>
              </li>
            </ul>
          </MenuItem>
          <MenuItem>Invitations</MenuItem>
          <MenuItem>Cloud Storage Environment Settings</MenuItem>
          <MenuItem>Authentication</MenuItem>
        </MenuList>
        <MenuLabel>Transactions</MenuLabel>
        <MenuList>
          <MenuItem>Payments</MenuItem>
          <MenuItem>Transfers</MenuItem>
          <MenuItem>Balance</MenuItem>
        </MenuList>
      </>
    ),
  },
};
