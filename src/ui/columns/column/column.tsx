import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

import { ColumnClasses } from './column.classes';
import { ColumnProps } from './column.props';

const Column = ({
  children,
  offset,
  size,
  narrow,
  className,
  ...props
}: ColumnProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['div']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const fieldClasses = container.resolve(ColumnClasses);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element
      className={classNames(
        className,
        fieldClasses.prepareClasses({ narrow, offset, size }),
      )}
      nameOf='column'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Column;
