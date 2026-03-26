import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { FixedGridClasses } from './fixedGrid.classes';
import { FixedGridProps } from './fixedGrid.props';

const FixedGrid = ({
  columns,
  autoCount,
  children,
  className,
  ...props
}: FixedGridProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['div']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const fixedClasses = container.resolve(FixedGridClasses);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element
      className={classNames(
        className,
        fixedClasses.prepareClasses({ autoCount, columns }),
      )}
      nameOf='fixed-grid'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default FixedGrid;
