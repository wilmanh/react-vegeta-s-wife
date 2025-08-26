import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ComponentType, JSX, useState } from 'react';
import Columns from '@/ui/columns/columns/columns';
import Column from '@/ui/columns/column/column';
import { ColumnsProps } from '@/ui/columns/columns/columns.props';
import { Box } from '@/ui/elements/box/box';
import { Title } from '@/ui/elements/headings/title/title';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Bulma/Frame/Columns',
  component: Columns as ComponentType,
  decorators: (Story) => (
    <div className='theme-light'>
      <Story />
    </div>
  ),
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Columns>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basics: Story = {
  args: {
    children: (
      <>
        <Column>
          <p className='bd-notification is-primary'>
            <code>First column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Second column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Third column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Fourth column</code>
          </p>
        </Column>
      </>
    ),
  },
};

const sizeText = [
  'full',
  'four-fifths',
  'three-quarters',
  'two-thirds',
  'three-fifths',
  'half',
  'two-fifths',
  'one-third',
  'one-quarter',
  'one-fifth',
];
const sizeNumber = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];

type ArgsProps = ColumnsProps;

export const SizesByString: Story = {
  render: (args: ArgsProps) => {
    return sizeText.map((size) => (
      <Columns {...args}>
        <Column size={size}>
          <p className='bd-notification is-primary'>
            <code>is {size}</code>
          </p>
        </Column>
        {size !== 'full' ? (
          <>
            <Column>
              <p className='bd-notification'>
                <code>auto</code>
              </p>
            </Column>
            <Column>
              <p className='bd-notification'>
                <code>auto</code>
              </p>
            </Column>
          </>
        ) : null}
      </Columns>
    ));
  },
};

export const SizesByNumber: Story = {
  render: (args: ArgsProps) => {
    return sizeNumber.map((size) => (
      <Columns {...args}>
        <Column size={size}>
          <p className='bd-notification is-primary'>
            <code>is {size}</code>
          </p>
        </Column>
        {size !== '12' ? (
          <Column>
            <p className='bd-notification'>
              <code>auto</code>
            </p>
          </Column>
        ) : null}
      </Columns>
    ));
  },
};

export const Offset: Story = {
  render: (args: ArgsProps) => {
    return (
      <>
        <Columns {...args}>
          <Column size={'half'} offset={'one-quarter'}>
            <p className='bd-notification is-primary'>
              <code>is-half</code>
              <code>is-offset-one-quarter</code>
            </p>
          </Column>
        </Columns>
        <Columns {...args}>
          <Column size={'three-fifths'} offset={'one-fifth'}>
            <p className='bd-notification is-primary'>
              <code>is-three-fifths</code>
              <code>is-offset-one-fifth</code>
            </p>
          </Column>
        </Columns>
        <Columns {...args}>
          <Column size={'4'} offset={'8'}>
            <p className='bd-notification is-primary'>
              <code>is-4</code>
              <code>is-offset-8</code>
            </p>
          </Column>
        </Columns>
        <Columns {...args}>
          <Column size={'11'} offset={'1'}>
            <p className='bd-notification is-primary'>
              <code>is-11</code>
              <code>is-offset-1</code>
            </p>
          </Column>
        </Columns>
      </>
    );
  },
};

export const Narrow: Story = {
  render: (args: ArgsProps) => {
    return (
      <Columns {...args}>
        <Column narrow>
          <Box style={{ width: '200px' }}>
            <Title hSize={5}>
              This column is only 200px wide, it is narrow.
            </Title>
          </Box>
        </Column>
        <Column>
          <Box>
            <Title hSize={5}>
              This column will take the remaining space available.
            </Title>
          </Box>
        </Column>
      </Columns>
    );
  },
};

export const ColumnsMobile: Story = {
  args: {
    responsive: 'mobile',
    children: (
      <>
        <Column
          size={{
            mobile: 'three-quarters',
            tablet: 'two-thirds',
            desktop: 'half',
            widescreen: 'one-third',
            fullhd: 'one-quarter',
          }}
        >
          <p className='bd-notification is-primary'>
            <code>
              is-three-quarters-mobile is-two-thirds-tablet is-half-desktop
              is-one-third-widescreen is-one-quarter-fullhd
            </code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Second column 2</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column 3</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column 4</code>
          </p>
        </Column>
      </>
    ),
  },
};

export const Nesting: Story = {
  args: {
    children: (
      <>
        <Column>
          <p className='bd-notification is-info'>
            <code>First Column</code>
          </p>
          <Columns responsive='mobile'>
            <Column>
              <p className='bd-notification is-info'>
                <code>First nested column</code>
              </p>
            </Column>
            <Column>
              <p className='bd-notification is-info'>
                <code>Second nested column</code>
              </p>
            </Column>
          </Columns>
        </Column>
        <Column>
          <p className='bd-notification is-danger'>
            <code>First Column</code>
          </p>
          <Columns responsive='mobile'>
            <Column>
              <p className='bd-notification is-danger'>
                <code>50%</code>
              </p>
            </Column>
            <Column>
              <p className='bd-notification is-danger'>
                <code>Auto</code>
              </p>
            </Column>
            <Column>
              <p className='bd-notification is-danger'>
                <code>Auto</code>
              </p>
            </Column>
          </Columns>
        </Column>
      </>
    ),
  },
};

export const DefaultGap: Story = {
  args: {
    children: (
      <>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Default gap</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Default gap</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Default gap</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Default gap</code>
          </p>
        </Column>
      </>
    ),
  },
};

export const Gapless: Story = {
  args: {
    gapless: true,
    children: (
      <>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Gapless</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Gapless</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Gapless</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Gapless</code>
          </p>
        </Column>
      </>
    ),
  },
};

export const GaplessMultiline: Story = {
  args: {
    gapless: true,
    multiline: true,
    responsive: 'mobile',
    children: (
      <>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>

        <Column size='half'>
          <p className='bd-notification is-primary'>
            <code>is-half</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>auto</code>
          </p>
        </Column>
      </>
    ),
  },
};

const VariableGapComponent = () => {
  const [gap, setGap] = useState(3);
  const options = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
    return (
      <a
        className={`bd-klmn-gap${
          n.toString() === gap.toString() ? ' bd-is-selected' : ''
        }`}
        onClick={() => setGap(n)}
        data-value={n.toString()}
      >
        is-{n}
      </a>
    );
  });
  return (
    <>
      <div className='bd-klmn-gaps'>
        <strong className='bd-klmn-label'>
          Gap:
          <code id='klmnValue' className='bd-klmn-value'>
            {0.25 * gap}rem
          </code>
        </strong>
        {options}
      </div>
      <Columns gap={gap.toString()}>
        <Column size={'3'}>
          <p className='bd-notification is-primary'>
            <code>Side</code>
          </p>
        </Column>
        <Column size={'9'}>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>
      </Columns>
      <Columns gap={gap.toString()}>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Three Columns</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Three Columns</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Three Columns</code>
          </p>
        </Column>
      </Columns>
    </>
  );
};

export const VariableGap: Story = {
  render: () => {
    return <VariableGapComponent />;
  },
};

export const BreakpointBasedColumnGaps: Story = {
  args: {
    gap: {
      mobile: '2',
      tablet: '0',
      desktop: '3',
      widescreen: '7',
      fullhd: '1',
    },
    children: (
      <>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>

        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>Column</code>
          </p>
        </Column>
      </>
    ),
  },
};

export const VerticalAlignment: Story = {
  args: {
    vCenter: true,
    children: (
      <>
        <Column size='8'>
          <p className='bd-notification is-primary'>
            <code>First Column</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>
              Second column with more content. This is so you can see the
              vertical alignment.
            </code>
          </p>
        </Column>
      </>
    ),
  },
};

export const Multiline: Story = {
  args: {
    multiline: true,
    responsive: 'mobile',
    children: (
      <>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>

        <Column size='half'>
          <p className='bd-notification is-primary'>
            <code>is-half</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column size='one-quarter'>
          <p className='bd-notification is-primary'>
            <code>is-one-quarter</code>
          </p>
        </Column>
        <Column>
          <p className='bd-notification is-primary'>
            <code>auto</code>
          </p>
        </Column>
      </>
    ),
  },
};

export const CenteringColumns: Story = {
  args: {
    center: true,
    responsive: 'mobile',
    children: (
      <>
        <Column size='half'>
          <p className='bd-notification is-primary'>
            <code>is-half</code>
          </p>
        </Column>
      </>
    ),
  },
};

export const CenteringMultiline: Story = {
  args: {
    center: true,
    multiline: true,
    responsive: 'mobile',
    children: (
      <>
        <Column narrow>
          <p
            style={{ padding: '1.25rem 1.5rem' }}
            className='bd-notification is-primary'
          >
            <code>is-narrow</code>
            <br />
            First Column
          </p>
        </Column>
        <Column narrow>
          <p
            style={{ padding: '1.25rem 1.5rem' }}
            className='bd-notification is-primary'
          >
            <code>is-narrow</code>
            <br />
            Second Column
          </p>
        </Column>
        <Column narrow>
          <p
            style={{ padding: '1.25rem 1.5rem' }}
            className='bd-notification is-primary'
          >
            <code>is-narrow</code>
            <br />
            Third Column
          </p>
        </Column>
        <Column narrow>
          <p
            style={{ padding: '1.25rem 1.5rem' }}
            className='bd-notification is-primary'
          >
            <code>is-narrow</code>
            <br />
            Fourth Column
          </p>
        </Column>
        <Column narrow>
          <p
            style={{ padding: '1.25rem 1.5rem' }}
            className='bd-notification is-primary'
          >
            <code>is-narrow</code>
            <br />
            Fifth Column
          </p>
        </Column>
      </>
    ),
  },
};
