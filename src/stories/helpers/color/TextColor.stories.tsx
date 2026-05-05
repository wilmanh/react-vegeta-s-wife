import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { Element } from '@/ui/elements/generic/element';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Helpers/TextColor',
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
                <code>textColor='white'</code>
              </td>
              <td>
                <code>has-text-white</code>
              </td>
              <Element as={'td'} textColor='white' backgroundColor='black'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='black'</code>
              </td>
              <td>
                <code>has-text-black</code>
              </td>
              <Element as={'td'} textColor='black'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='light'</code>
              </td>
              <td>
                <code>has-text-light</code>
              </td>
              <Element as={'td'} textColor='light' backgroundColor='grey'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='dark'</code>
              </td>
              <td>
                <code>has-text-dark</code>
              </td>
              <Element as={'td'} textColor='dark'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary'</code>
              </td>
              <td>
                <code>has-text-primary</code>
              </td>
              <Element as={'td'} textColor='primary'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='link'</code>
              </td>
              <td>
                <code>has-text-link</code>
              </td>
              <Element as={'td'} textColor='link'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='info'</code>
              </td>
              <td>
                <code>has-text-info</code>
              </td>
              <Element as={'td'} textColor='info'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='success'</code>
              </td>
              <td>
                <code>has-text-success</code>
              </td>
              <Element as={'td'} textColor='success'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='warning'</code>
              </td>
              <td>
                <code>has-text-warning</code>
              </td>
              <Element as={'td'} textColor='warning'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='danger'</code>
              </td>
              <td>
                <code>has-text-danger</code>
              </td>
              <Element as={'td'} textColor='danger'>
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
                <code>textColor='black-bis'</code>
              </td>
              <td>
                <code>has-text-black-bis</code>
              </td>
              <Element as={'td'} textColor='black-bis'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='black-ter'</code>
              </td>
              <td>
                <code>has-text-black-ter</code>
              </td>
              <Element as={'td'} textColor='black-ter'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='grey-darker'</code>
              </td>
              <td>
                <code>has-text-grey-darker</code>
              </td>
              <Element as={'td'} textColor='grey-darker'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='grey-dark'</code>
              </td>
              <td>
                <code>has-text-grey-dark</code>
              </td>
              <Element as={'td'} textColor='grey-dark'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='grey'</code>
              </td>
              <td>
                <code>has-text-grey</code>
              </td>
              <Element as={'td'} textColor='grey'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='grey-light'</code>
              </td>
              <td>
                <code>has-text-grey-light</code>
              </td>
              <Element as={'td'} textColor='grey-light'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='grey-lighter'</code>
              </td>
              <td>
                <code>has-text-grey-lighter</code>
              </td>
              <Element as={'td'} textColor='grey-lighter'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='white-ter'</code>
              </td>
              <td>
                <code>has-text-white-ter</code>
              </td>
              <Element as={'td'} textColor='white-ter' backgroundColor='black'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='white-bis'</code>
              </td>
              <td>
                <code>has-text-white-bis</code>
              </td>
              <Element as={'td'} textColor='white-bis' backgroundColor='black'>
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
                <code>textColor='primary' textShade={'light'}</code>
              </td>
              <td>
                <code>has-text-primary-light</code>
              </td>
              <Element
                as={'td'}
                textColor='primary'
                textShade={'light'}
                backgroundColor='dark'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='link' textShade={'light'}</code>
              </td>
              <td>
                <code>has-text-link-light</code>
              </td>
              <Element
                as={'td'}
                textColor='link'
                textShade={'light'}
                backgroundColor='dark'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='info' textShade={'light'}</code>
              </td>
              <td>
                <code>has-text-info-light</code>
              </td>
              <Element
                as={'td'}
                textColor='info'
                textShade={'light'}
                backgroundColor='dark'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='success' textShade={'light'}</code>
              </td>
              <td>
                <code>has-text-success-light</code>
              </td>
              <Element
                as={'td'}
                textColor='success'
                textShade={'light'}
                backgroundColor='dark'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='warning' textShade={'light'}</code>
              </td>
              <td>
                <code>has-text-warning-light</code>
              </td>
              <Element
                as={'td'}
                textColor='warning'
                textShade={'light'}
                backgroundColor='dark'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='danger' textShade={'light'}</code>
              </td>
              <td>
                <code>has-text-danger-light</code>
              </td>
              <Element
                as={'td'}
                textColor='danger'
                textShade={'light'}
                backgroundColor='dark'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade={'dark'}</code>
              </td>
              <td>
                <code>has-text-primary-dark</code>
              </td>
              <Element as={'td'} textColor='primary' textShade={'dark'}>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='link' textShade={'dark'}</code>
              </td>
              <td>
                <code>has-text-link-dark</code>
              </td>
              <Element as={'td'} textColor='link' textShade={'dark'}>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='info' textShade={'dark'}</code>
              </td>
              <td>
                <code>has-text-info-dark</code>
              </td>
              <Element as={'td'} textColor='info' textShade={'dark'}>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='success' textShade={'dark'}</code>
              </td>
              <td>
                <code>has-text-success-dark</code>
              </td>
              <Element as={'td'} textColor='success' textShade={'dark'}>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='warning' textShade={'dark'}</code>
              </td>
              <td>
                <code>has-text-warning-dark</code>
              </td>
              <Element as={'td'} textColor='warning' textShade={'dark'}>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='danger' textShade={'dark'}</code>
              </td>
              <td>
                <code>has-text-danger-dark</code>
              </td>
              <Element as={'td'} textColor='danger' textShade={'dark'}>
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
                <code>textColor='current'</code>
              </td>
              <td>
                <code>has-text-current</code>
              </td>
              <Element as={'td'} textColor='current'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='inherit'</code>
              </td>
              <td>
                <code>has-text-inherit</code>
              </td>
              <Element as={'td'} textColor='inherit'>
                Hello Vegeta
              </Element>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
};
