import { ComponentType } from 'react';
import { GrCheckmark, GrMail, GrStatusWarning } from 'react-icons/gr';

import { Button } from '@/ui/elements/button/button';
import { Icon } from '@/ui/elements/icon/icon';
import Checkbox from '@/ui/form/checkbox/checkbox';
import Control from '@/ui/form/control/control';
import Field from '@/ui/form/field/field';
import Help from '@/ui/form/help/help';
import Input from '@/ui/form/input/input';
import Label from '@/ui/form/label/label';
import Radio from '@/ui/form/radio/radio';
import Textarea from '@/ui/form/textarea/textarea';

import type { Meta, StoryObj } from '@storybook/react-vite';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Form/General',
  component: Field as ComponentType,

  decorators: (Story) => (
    <div style={{ padding: '2rem' }} className='theme-light'>
      <Story />
    </div>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteFormExample: Story = {
  render: (args: object) => (
    <>
      <Field>
        <Label className='has-text-black'>Name</Label>
        <Control>
          <Input {...args} placeholder='Text Input' />
        </Control>
      </Field>
      <Field>
        <Label className='has-text-black'>UserName</Label>
        <Control iconLeft iconRight>
          <Input {...args} color='success' value={'bulmaio'} />
          <Icon size='small' left>
            <GrMail />
          </Icon>
          <Icon size='small' right>
            <GrCheckmark />
          </Icon>
        </Control>
        <Help color='success'>Username Available</Help>
      </Field>
      <Field>
        <Label className='has-text-black'>Email</Label>
        <Control iconLeft iconRight>
          <Input {...args} color='danger' value={'bulmaio'} />
          <Icon size='small' left>
            <GrMail />
          </Icon>
          <Icon size='small' right>
            <GrStatusWarning />
          </Icon>
        </Control>
        <Help color='danger'>Username Available</Help>
      </Field>
      <Field>
        <Label className='has-text-black'>Subject</Label>
        <Control>
          <div className='select'>
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </Control>
      </Field>
      <Field>
        <Label className='has-text-black'>Message</Label>
        <Control>
          <Textarea placeholder='Textarea' />
        </Control>
      </Field>
      <Field>
        <Control>
          <Checkbox>Agree to terms and conditions</Checkbox>
        </Control>
      </Field>
      <Field>
        <Radio name='radiostorybook'>Yes</Radio>
        <Radio name='radiostorybook'>No</Radio>
      </Field>
      <Field grouped>
        <Button color='link'>Submit</Button>
        <Button color='link' light>
          Cancel
        </Button>
      </Field>
    </>
  ),
};

export const Addons: Story = {
  render: (args: object) => (
    <>
      <Field addons>
        <Control>
          <Input {...args} placeholder='Text Input' />
        </Control>
        <Control>
          <Button color='info'>Submit</Button>
        </Control>
      </Field>
      <Field position='centered' addons>
        <Control>
          <Input {...args} placeholder='sirius' />
        </Control>
        <Control>
          <Button as={'a'} static>
            @gmail.com
          </Button>
        </Control>
      </Field>
      <Field position='right' addons>
        <Control>
          <Input {...args} placeholder='Text Input' />
        </Control>
        <Control>
          <Button color='info'>Submit</Button>
        </Control>
      </Field>
    </>
  ),
};

export const Expanded: Story = {
  render: (args: object) => (
    <>
      <Field addons>
        <Control>
          <span className='select'>
            <select>
              <option>$</option>
              <option>£</option>
              <option>€</option>
            </select>
          </span>
        </Control>
        <Control expanded>
          <Input {...args} placeholder='sirius' />
        </Control>
        <Control>
          <Button>Transfer</Button>
        </Control>
      </Field>
      <Field grouped>
        <Control expanded>
          <Input {...args} placeholder='sirius' />
        </Control>
        <Control>
          <Button color='info'>Transfer</Button>
        </Control>
      </Field>
    </>
  ),
};

export const GroupedMultiline: Story = {
  render: () => (
    <Field grouped multiline>
      <Control>
        <Button color='info'>one</Button>
      </Control>
      <Control>
        <Button color='info'>two</Button>
      </Control>
      <Control>
        <Button color='info'>three</Button>
      </Control>
      <Control>
        <Button color='info'>four</Button>
      </Control>
      <Control>
        <Button color='info'>five</Button>
      </Control>
      <Control>
        <Button color='info'>six</Button>
      </Control>
      <Control>
        <Button color='info'>seven</Button>
      </Control>
      <Control>
        <Button color='info'>eight</Button>
      </Control>
      <Control>
        <Button color='info'>nine</Button>
      </Control>
      <Control>
        <Button color='info'>ten</Button>
      </Control>
      <Control>
        <Button color='info'>eleven</Button>
      </Control>
      <Control>
        <Button color='info'>twelve</Button>
      </Control>
      <Control>
        <Button color='info'>thirteen</Button>
      </Control>
      <Control>
        <Button color='info'>fourteen</Button>
      </Control>
      <Control>
        <Button color='info'>fifthteen</Button>
      </Control>
    </Field>
  ),
};
