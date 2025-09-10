import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { CellProps } from './cell.props';
import { CellClasses } from './cell.classes';

const Cell = ({
  colEnd,
  colSpan,
  colStart,
  rowEnd,
  rowSpan,
  rowStart,
  children,
  className,
  ...props
}: CellProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['div']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const cellClasses = container.resolve(CellClasses);
  return (
    <Element
      className={classNames(
        className,
        cellClasses.prepareClasses({
          colEnd,
          colSpan,
          colStart,
          rowEnd,
          rowSpan,
          rowStart,
        }),
      )}
      nameOf='cell'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Cell;
