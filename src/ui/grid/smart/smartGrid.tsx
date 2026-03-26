import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { SmartGridProps } from './smartGrid.props';
import classNames from 'classnames';
import { SmartGridClasses } from './smartGrid.classes';
import { container } from 'tsyringe';

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
