import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { Element } from '@/ui/elements/generic/element';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Helpers/BackgroundColor',
  component: Element as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof Element>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    as: 'div',
    children: (
      <>
        <table className='table is-bordered'>
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
                <code>backgroundColor='white'</code>
              </td>
              <td>
                <code>has-background-white</code>
              </td>
              <Element as={'td'} backgroundColor='white'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='black'</code>
              </td>
              <td>
                <code>has-background-black</code>
              </td>
              <Element as={'td'} backgroundColor='black'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='light'</code>
              </td>
              <td>
                <code>has-background-light</code>
              </td>
              <Element as={'td'} backgroundColor='light'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='dark'</code>
              </td>
              <td>
                <code>has-background-dark</code>
              </td>
              <Element as={'td'} backgroundColor='dark'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='primary'</code>
              </td>
              <td>
                <code>has-background-primary</code>
              </td>
              <Element as={'td'} backgroundColor='primary'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='link'</code>
              </td>
              <td>
                <code>has-background-link</code>
              </td>
              <Element as={'td'} backgroundColor='link'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='info'</code>
              </td>
              <td>
                <code>has-background-info</code>
              </td>
              <Element as={'td'} backgroundColor='info'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='success'</code>
              </td>
              <td>
                <code>has-background-success</code>
              </td>
              <Element as={'td'} backgroundColor='success'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='warning'</code>
              </td>
              <td>
                <code>has-background-warning</code>
              </td>
              <Element as={'td'} backgroundColor='warning'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='danger'</code>
              </td>
              <td>
                <code>has-background-danger</code>
              </td>
              <Element as={'td'} backgroundColor='danger'></Element>
            </tr>
          </tbody>
        </table>
        <table className='table is-bordered'>
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
                <code>backgroundColor='black-bis'</code>
              </td>
              <td>
                <code>has-background-black-bis</code>
              </td>
              <Element as={'td'} backgroundColor='black-bis'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='black-ter'</code>
              </td>
              <td>
                <code>has-background-black-ter</code>
              </td>
              <Element as={'td'} backgroundColor='black-ter'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='grey-darker'</code>
              </td>
              <td>
                <code>has-background-grey-darker</code>
              </td>
              <Element as={'td'} backgroundColor='grey-darker'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='grey-dark'</code>
              </td>
              <td>
                <code>has-background-grey-dark</code>
              </td>
              <Element as={'td'} backgroundColor='grey-dark'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='grey'</code>
              </td>
              <td>
                <code>has-background-grey</code>
              </td>
              <Element as={'td'} backgroundColor='grey'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='grey-light'</code>
              </td>
              <td>
                <code>has-background-grey-light</code>
              </td>
              <Element as={'td'} backgroundColor='grey-light'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='grey-lighter'</code>
              </td>
              <td>
                <code>has-background-grey-lighter</code>
              </td>
              <Element as={'td'} backgroundColor='grey-lighter'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='white-ter'</code>
              </td>
              <td>
                <code>has-background-white-ter</code>
              </td>
              <Element as={'td'} backgroundColor='white-ter'></Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='white-bis'</code>
              </td>
              <td>
                <code>has-background-white-bis</code>
              </td>
              <Element as={'td'} backgroundColor='white-bis'></Element>
            </tr>
          </tbody>
        </table>
        <table className='table is-bordered'>
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
                <code>backgroundColor='primary' backgroundShade='light'</code>
              </td>
              <td>
                <code>has-background-primary-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='primary'
                backgroundShade='light'
                textColor='primary'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='link' backgroundShade='light'</code>
              </td>
              <td>
                <code>has-background-link-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='link'
                backgroundShade='light'
                textColor='link'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='info' backgroundShade='light'</code>
              </td>
              <td>
                <code>has-background-info-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='info'
                backgroundShade='light'
                textColor='info'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='success' backgroundShade='light'</code>
              </td>
              <td>
                <code>has-background-success-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='success'
                backgroundShade='light'
                textColor='success'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='warning' backgroundShade='light'</code>
              </td>
              <td>
                <code>has-background-warning-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='warning'
                backgroundShade='light'
                textColor='warning'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='danger' backgroundShade='light'</code>
              </td>
              <td>
                <code>has-background-danger-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='danger'
                backgroundShade='light'
                textColor='danger'
              >
                Hello Vegeta
              </Element>
            </tr>

            <tr>
              <td>
                <code>backgroundColor='primary' backgroundShade='dark'</code>
              </td>
              <td>
                <code>has-background-primary-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='primary'
                backgroundShade='dark'
                textColor='primary'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='link' backgroundShade='dark'</code>
              </td>
              <td>
                <code>has-background-link-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='link'
                backgroundShade='dark'
                textColor='link'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='info' backgroundShade='dark'</code>
              </td>
              <td>
                <code>has-background-info-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='info'
                backgroundShade='dark'
                textColor='info'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='success' backgroundShade='dark'</code>
              </td>
              <td>
                <code>has-background-success-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='success'
                backgroundShade='dark'
                textColor='success'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='warning' backgroundShade='dark'</code>
              </td>
              <td>
                <code>has-background-warning-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='warning'
                backgroundShade='dark'
                textColor='warning'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='danger' backgroundShade='dark'</code>
              </td>
              <td>
                <code>has-background-danger-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='danger'
                backgroundShade='dark'
                textColor='danger'
              >
                Hello Vegeta
              </Element>
            </tr>
          </tbody>
        </table>
        <table className='table is-bordered'>
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
                <code>backgroundColor='current'</code>
              </td>
              <td>
                <code>has-background-current</code>
              </td>
              <Element as={'td'} backgroundColor='current'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>backgroundColor='inherit'</code>
              </td>
              <td>
                <code>has-background-inherit</code>
              </td>
              <Element as={'td'} backgroundColor='inherit'>
                Hello Vegeta
              </Element>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
};
