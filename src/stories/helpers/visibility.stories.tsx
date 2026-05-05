import { ComponentType } from 'react';

import { Element } from '@/ui/elements/generic/element';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Bulma/Helpers/Visibility',
  component: Element as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Element>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: 'div',
    children: (
      <Element as='div' className='p-5'>
        <table className='table is-bordered is-fullwidth'>
          <thead>
            <tr>
              <th>Properties</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>{'invisible'}</code>
              </td>
              <td>
                <code>is-invisible</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'onlyScreenReader'}</code>
              </td>
              <td>
                <code>is-sr-only</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'show="flex"'}</code>
              </td>
              <td>
                <code>is-flex</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'hiddenMobile'}</code>
              </td>
              <td>
                <code>is-hidden-mobile</code>
              </td>
            </tr>
          </tbody>
        </table>
      </Element>
    ),
  },
};
