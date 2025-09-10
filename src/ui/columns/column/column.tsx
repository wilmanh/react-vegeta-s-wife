import 'reflect-metadata';
import { JSX } from 'react';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { ColumnProps } from './column.props';
import { ColumnClasses } from './column.classes';
import { Element } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

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
