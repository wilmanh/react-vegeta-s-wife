import { ComponentType } from 'react';

import { Element } from '@/ui/elements/generic/element';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Bulma/Helpers/Typography',
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
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>{'fontSize={1}'}</code>
              </td>
              <td>
                <code>is-size-1</code>
              </td>
              <td>
                <Element as='p' fontSize={1}>
                  Large heading text
                </Element>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'fontSize={{ mobile: 6, desktop: 3 }}'}</code>
              </td>
              <td>
                <code>is-size-6-mobile is-size-3-desktop</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'textAlignment={"centered"}'}</code>
              </td>
              <td>
                <code>has-text-centered</code>
              </td>
              <td>
                <Element as='p' textAlignment={'centered'}>
                  Centered text
                </Element>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'textTransformation="uppercase"'}</code>
              </td>
              <td>
                <code>is-uppercase</code>
              </td>
              <td>
                <Element as='p' textTransformation='uppercase'>
                  Uppercase text
                </Element>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'textWeight={"bold"'}</code>
              </td>
              <td>
                <code>has-text-bold</code>
              </td>
              <td>
                <Element as='p' textWeight='bold'>
                  Bold text
                </Element>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'fontFamily="monospace"'}</code>
              </td>
              <td>
                <code>has-family-monospace</code>
              </td>
              <td>
                <Element as='p' fontFamily='monospace'>
                  Monospace text
                </Element>
              </td>
            </tr>
          </tbody>
        </table>
      </Element>
    ),
  },
};
