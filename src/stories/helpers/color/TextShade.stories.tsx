import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { Element } from '@/ui/elements/generic/element';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Helpers/TextShade',
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
              <th>Invert</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>textColor='primary' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary</code>
              </td>
              <Element as={'td'} textColor='primary'>
                Hello Vegeta
              </Element>
              <Element as={'td'} textInverted textColor='primary'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='00' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-00</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='00'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='00'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='05' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-05</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='05'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='05'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='10' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-10</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='10'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='10'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='15' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-15</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='15'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='15'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='20' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-20</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='20'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='20'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='25' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-25</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='25'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='25'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='30' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-30</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='30'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='30'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='35' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-35</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='35'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='35'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='40' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-40</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='40'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='40'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='45' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-45</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='45'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='45'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='50' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-50</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='50'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='50'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='55' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-55</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='55'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='55'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='60' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-60</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='60'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='60'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='65' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-65</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='65'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='65'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='70' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-70</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='70'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='70'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='75' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-75</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='75'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='75'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='80' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-80</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='80'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='80'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='85' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-85</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='85'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='85'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='90' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-90</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='90'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='90'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='95' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-95</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='95'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='95'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='100' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-100</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='100'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='100'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  textColor='primary' textShade='light' (textInverted)
                </code>
              </td>
              <td>
                <code>has-text-primary-light</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='light'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='light'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='dark' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-dark</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='dark'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='dark'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='soft' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-soft</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='soft'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='soft'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>textColor='primary' textShade='bold' (textInverted)</code>
              </td>
              <td>
                <code>has-text-primary-bold</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='bold'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='bold'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  textColor='primary' textShade='on-scheme' (textInverted)
                </code>
              </td>
              <td>
                <code>has-text-primary-on-scheme</code>
              </td>
              <Element as={'td'} textColor='primary' textShade='on-scheme'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                textInverted
                textColor='primary'
                textShade='on-scheme'
              >
                Hello Vegeta
              </Element>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
};
