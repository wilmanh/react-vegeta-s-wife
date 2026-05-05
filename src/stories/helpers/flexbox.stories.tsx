import { ComponentType } from 'react';

import { Element } from '@/ui/elements/generic/element';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Bulma/Helpers/Flexbox',
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
      <Element as='div'>
        <p>Flex Direction</p>
        <table className='table is-bordered is-center'>
          <thead>
            <tr>
              <th>Properties Direction</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>{'flexDirection="column"'}</code>
              </td>
              <td>
                <code>is-flex-direction-row</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'flexDirection="row"'}</code>
              </td>
              <td>
                <code>is-flex-direction-row</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'flexDirection="column-reverse"'}</code>
              </td>
              <td>
                <code>is-flex-direction-column-reverse</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'flexDirection="row-reverse"'}</code>
              </td>
              <td>
                <code>is-flex-direction-row-reverse</code>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Flex Wrap</p>
        <table className='table is-bordered is-center'>
          <thead>
            <tr>
              <th>Properties Direction</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>{'flexWrap="nowrap"'}</code>
              </td>
              <td>
                <code>is-flex-wrap-nowrap</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'flexWrap="wrap"'}</code>
              </td>
              <td>
                <code>is-flex-wrap-wrap</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'flexWrap="wrap-verse"}}'}</code>
              </td>
              <td>
                <code>is-flex-wrap-wrap-reverse</code>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Justify Content</p>
        <table className='table is-bordered is-center'>
          <thead>
            <tr>
              <th>Properties Direction</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>{'justifyContent="flex-start"'}</code>
              </td>
              <td>
                <code>is-justify-content-flex-start</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'justifyContent="center"'}</code>
              </td>
              <td>
                <code>is-justify-content-center</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>...</code>
              </td>
              <td>
                <code>...</code>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Align Content</p>
        <table className='table is-bordered is-center'>
          <thead>
            <tr>
              <th>Properties Direction</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>{'alignContent="flex-start"'}</code>
              </td>
              <td>
                <code>is-align-content-flex-start</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'alignContent="center"'}</code>
              </td>
              <td>
                <code>is-align-content-center</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>...</code>
              </td>
              <td>
                <code>...</code>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Align items</p>
        <table className='table is-bordered is-center'>
          <thead>
            <tr>
              <th>Properties Direction</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>{'alignItems="flex-start"'}</code>
              </td>
              <td>
                <code>is-align-items-flex-start</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'alignItems="center"'}</code>
              </td>
              <td>
                <code>is-align-items-center</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>...</code>
              </td>
              <td>
                <code>...</code>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Align self</p>
        <table className='table is-bordered is-center'>
          <thead>
            <tr>
              <th>Properties Direction</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>{'alignSelf="auto"'}</code>
              </td>
              <td>
                <code>is-align-self-auto</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'alignSelf="baseline"'}</code>
              </td>
              <td>
                <code>is-align-self-baseline</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>...</code>
              </td>
              <td>
                <code>...</code>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Grow and Shrink</p>
        <table className='table is-bordered is-center'>
          <thead>
            <tr>
              <th>Properties Direction</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>{'grow={0} shrink={"0"}'}</code>
              </td>
              <td>
                <code>is-flex-grow-0 is-flex-shrink-0</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>{'grow={6} shrink={"6"}'}</code>
              </td>
              <td>
                <code>is-flex-grow-6 is-flex-shrink-6</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>...</code>
              </td>
              <td>
                <code>...</code>
              </td>
            </tr>
          </tbody>
        </table>
        <Element as={'div'}></Element>
      </Element>
    ),
  },
};
