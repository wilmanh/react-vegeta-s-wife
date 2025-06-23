import { argColors } from '@/stories/Types/argColors';
import PanelBlock from '@/ui/components/panel/block/panelBlock';
import PanelHeading from '@/ui/components/panel/heading/panelHeading';
import PanelIcon from '@/ui/components/panel/icon/panelIcon';
import Panel from '@/ui/components/panel/panel';
import PanelTab from '@/ui/components/panel/tabs/panelTab';
import PanelTabs from '@/ui/components/panel/tabs/panelTabs';
import { Button } from '@/ui/elements/button/button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentType } from 'react';
import { GrBug } from 'react-icons/gr';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Components/Panel',
  component: Panel as ComponentType,
  decorators: (Story) => (
    <div style={{ margin: '5rem' }} className='theme-light'>
      <Story />
    </div>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argColors,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    children: (
      <>
        <PanelHeading>Repositories</PanelHeading>
        <PanelBlock>
          <p className='control has-icons-left'>
            <input className='input' type='text' placeholder='Search' />
            <span className='icon is-left'>
              <i className='fas fa-search' aria-hidden='true'></i>
            </span>
          </p>
        </PanelBlock>
        <PanelTabs>
          <PanelTab active>All</PanelTab>
          <PanelTab>Public</PanelTab>
          <PanelTab>Private</PanelTab>
          <PanelTab>Sources</PanelTab>
          <PanelTab>Forks</PanelTab>
        </PanelTabs>
        <PanelBlock active>
          <PanelIcon>
            <GrBug />
          </PanelIcon>
          Bulma
        </PanelBlock>
        <PanelBlock>
          <PanelIcon>
            <GrBug />
          </PanelIcon>
          MarkSheet
        </PanelBlock>
        <PanelBlock>
          <PanelIcon>
            <GrBug />
          </PanelIcon>
          MiniReset.css
        </PanelBlock>
        <PanelBlock>
          <input type='checkbox' />
          Remember me
        </PanelBlock>
        <PanelBlock>
          <Button color='link' outlined fullwidth>
            Reser All Filters
          </Button>
        </PanelBlock>
      </>
    ),
  },
};
