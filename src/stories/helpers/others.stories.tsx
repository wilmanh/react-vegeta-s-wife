import { ComponentType } from 'react';

import { Element } from '@/ui/elements/generic/element';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Bulma/Helpers/Others',
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
        <p className='title is-4'>Others Helpers</p>
        <table className='table is-bordered'>
          <thead>
            <tr>
              <th>Properties</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>{'clearfix'}</code>
              </td>
              <td>
                <code>is-clearfix</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'pulledLeft'}</code>
              </td>
              <td>
                <code>is-pulled-left</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'pulledRight'}</code>
              </td>
              <td>
                <code>is-pulled-right</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'overlay'}</code>
              </td>
              <td>
                <code>is-overlay</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'radiusless'}</code>
              </td>
              <td>
                <code>is-radiusless</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'shadowless'}</code>
              </td>
              <td>
                <code>is-shadowless</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'unselectable'}</code>
              </td>
              <td>
                <code>is-unselectable</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'clickable'}</code>
              </td>
              <td>
                <code>is-clickable</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'clipped'}</code>
              </td>
              <td>
                <code>is-clipped</code>
              </td>
            </tr>
          </tbody>
        </table>
      </Element>
    ),
  },
};
