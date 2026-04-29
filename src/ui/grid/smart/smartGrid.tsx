import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

import { SmartGridClasses } from './smartGrid.classes';
import { SmartGridProps } from './smartGrid.props';

const Grid = ({
  gap,
  rowGap,
  columnGap,
  columnSize,
  children,
  className,
  ...props
}: SmartGridProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['div']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const smartGridClasses = container.resolve(SmartGridClasses);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element
      className={classNames(
        className,
        smartGridClasses.prepareClasses({
          gap,
          rowGap,
          columnGap,
          columnSize,
        }),
      )}
      nameOf='grid'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Grid;
