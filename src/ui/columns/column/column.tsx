import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { ColumnProps } from './column.props';
import { ColumnClasses } from './column.classes';

const Column = ({
  children,
  offset,
  size,
  narrow,
  className,
  ...props
}: JSX.IntrinsicElements['div'] &
  ColumnProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
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
