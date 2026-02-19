import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { Element } from '@/ui/elements/generic/element';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Helpers/BackgroundShade',
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
                <code>backgroundColor='primary' (backgroundInverted)</code>
              </td>
              <td>
                <code>has-background-primary</code>
              </td>
              <Element as={'td'} backgroundColor='primary'>
                Hello Vegeta
              </Element>
              <Element as={'td'} backgroundInverted backgroundColor='primary'>
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='00'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-00</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='00'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='00'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='05'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-05</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='05'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='05'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='10'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-10</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='10'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='10'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='15'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-15</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='15'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='15'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='20'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-20</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='20'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='20'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='25'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-25</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='25'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='25'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='30'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-30</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='30'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='30'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='35'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-35</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='35'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='35'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='40'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-40</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='40'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='40'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='45'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-45</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='45'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='45'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='50'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-50</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='50'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='50'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='55'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-55</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='55'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='55'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='60'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-60</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='60'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='60'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='65'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-65</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='65'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='65'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='70'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-70</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='70'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='70'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='75'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-75</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='75'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='75'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='80'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-80</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='80'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='80'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='85'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-85</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='85'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='85'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='90'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-90</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='90'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='90'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='95'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-95</code>
              </td>
              <Element as={'td'} backgroundColor='primary' backgroundShade='95'>
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='95'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='100'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-100</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='primary'
                backgroundShade='100'
              >
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='100'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='light'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-light</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='primary'
                backgroundShade='light'
              >
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='light'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='dark'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-dark</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='primary'
                backgroundShade='dark'
              >
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='dark'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='soft'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-soft</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='primary'
                backgroundShade='soft'
              >
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='soft'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='bold'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-bold</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='primary'
                backgroundShade='bold'
              >
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='bold'
              >
                Hello Vegeta
              </Element>
            </tr>
            <tr>
              <td>
                <code>
                  backgroundColor='primary' backgroundShade='on-scheme'
                  (backgroundInverted)
                </code>
              </td>
              <td>
                <code>has-background-primary-on-scheme</code>
              </td>
              <Element
                as={'td'}
                backgroundColor='primary'
                backgroundShade='on-scheme'
              >
                Hello Vegeta
              </Element>
              <Element
                as={'td'}
                backgroundInverted
                backgroundColor='primary'
                backgroundShade='on-scheme'
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
