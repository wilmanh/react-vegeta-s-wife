import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { Element } from '@/ui/elements/generic/element';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Helpers/Color',
  component: Element as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
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
              <th>Class</th>
              <th>Color</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>has-text-white</code>
              </td>
              <td>
                <span
                  className='bd-color'
                  style={{ background: 'hsl(0, 0%, 100%)' }}
                ></span>
                <code>hsl(0, 0%, 100%)</code>
              </td>
              <Element
                as={'td'}
                colors={{ textColor: 'white', backgroundColor: 'black' }}
              >
                Hello Bulma
              </Element>
            </tr>
            <tr>
              <td>
                <code>has-text-black</code>
              </td>
              <td>
                <span
                  className='bd-color'
                  style={{ background: 'hsl(0, 0%, 4%)' }}
                ></span>
                <code>hsl(0, 0%, 4%)</code>
              </td>
              <Element as={'td'} colors={{ textColor: 'black' }}>
                Hello Bulma
              </Element>
            </tr>
            <tr>
              <td>
                <code>has-text-light</code>
              </td>
              <td>
                <span
                  className='bd-color'
                  style={{ background: 'hsl(0, 0%, 96%)' }}
                ></span>
                <code>hsl(0, 0%, 96%)</code>
              </td>
              <Element
                as={'td'}
                colors={{ textColor: 'light', backgroundColor: 'grey' }}
              >
                Hello Bulma
              </Element>
            </tr>
            <tr>
              <td>
                <code>has-text-dark</code>
              </td>
              <td>
                <span
                  className='bd-color'
                  style={{ background: 'hsl(0, 0%, 21%)' }}
                ></span>
                <code>hsl(0, 0%, 21%)</code>
              </td>
              <td className='has-text-dark'>Hello Bulma</td>
            </tr>
            <tr>
              <td>
                <code>has-text-primary</code>
              </td>
              <td>
                <span
                  className='bd-color'
                  style={{ background: 'hsl(171, 100%, 41%)' }}
                ></span>
                <code>hsl(171, 100%, 41%)</code>
              </td>
              <Element as={'td'} colors={{ textColor: 'primary' }}>
                Hello Bulma
              </Element>
            </tr>
            <tr>
              <td>
                <code>has-text-link</code>
              </td>
              <td>
                <span
                  className='bd-color'
                  style={{ background: 'hsl(217, 71%,  53%)' }}
                ></span>
                <code>hsl(217, 71%, 53%)</code>
              </td>
              <Element as={'td'} colors={{ textColor: 'link' }}>
                Hello Bulma
              </Element>
            </tr>
            <tr>
              <td>
                <code>has-text-info</code>
              </td>
              <td>
                <span
                  className='bd-color'
                  style={{ background: 'hsl(204, 86%, 53%)' }}
                ></span>
                <code>hsl(204, 86%, 53%)</code>
              </td>
              <Element as={'td'} colors={{ textColor: 'info' }}>
                Hello Bulma
              </Element>
            </tr>
            <tr>
              <td>
                <code>has-text-success</code>
              </td>
              <td>
                <span
                  className='bd-color'
                  style={{ background: 'hsl(141, 71%,  48%)' }}
                ></span>
                <code>hsl(141, 71%, 48%)</code>
              </td>
              <Element as={'td'} colors={{ textColor: 'success' }}>
                Hello Bulma
              </Element>
            </tr>
            <tr>
              <td>
                <code>has-text-warning</code>
              </td>
              <td>
                <span
                  className='bd-color'
                  style={{ background: 'hsl(48,  100%, 67%)' }}
                ></span>
                <code>hsl(48, 100%, 67%)</code>
              </td>
              <Element as={'td'} colors={{ textColor: 'warning' }}>
                Hello Bulma
              </Element>
            </tr>
            <tr>
              <td>
                <code>has-text-danger</code>
              </td>
              <td>
                <span
                  className='bd-color'
                  style={{ background: 'hsl(348, 100%, 61%)' }}
                ></span>
                <code>hsl(348, 100%, 61%)</code>
              </td>
              <Element as={'td'} colors={{ textColor: 'danger' }}>
                Hello Bulma
              </Element>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
};
