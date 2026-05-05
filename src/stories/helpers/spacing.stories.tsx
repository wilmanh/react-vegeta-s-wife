import { ComponentType } from 'react';

import { Element } from '@/ui/elements/generic/element';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Bulma/Helpers/Spacing',
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
                <code>{'margin={ 4}'}</code>
              </td>
              <td>
                <code>m-4</code>
              </td>
              <td>
                <Element as='div' backgroundColor='light'>
                  <Element as='div' margin={4} className='box'>
                    Margin
                  </Element>
                </Element>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'marginX={ 5}'}</code>
              </td>
              <td>
                <code>mx-5</code>
              </td>
              <td>
                <Element as='div' backgroundColor='light'>
                  <Element as='div' marginX={5} className='box'>
                    Horizontal margin
                  </Element>
                </Element>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'p={ 5}'}</code>
              </td>
              <td>
                <code>p-5</code>
              </td>
              <td>
                <Element as='div' p={5} backgroundColor='info'>
                  Padding
                </Element>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'paddingX={ 6} paddingY={2}'}</code>
              </td>
              <td>
                <code>px-6 py-2</code>
              </td>
              <td>
                <Element
                  as='div'
                  paddingX={6}
                  paddingY={2}
                  backgroundColor='success'
                >
                  Axis padding
                </Element>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'mt={3} mb={3} px={4}'}</code>
              </td>
              <td>
                <code>mt-3 mb-3 px-4</code>
              </td>
              <td>
                <Element as='div' backgroundColor='light'>
                  <Element
                    as='div'
                    mt={3}
                    mb={3}
                    px={4}
                    backgroundColor='warning'
                  >
                    Shorthand spacing
                  </Element>
                </Element>
              </td>
            </tr>
          </tbody>
        </table>
      </Element>
    ),
  },
};
