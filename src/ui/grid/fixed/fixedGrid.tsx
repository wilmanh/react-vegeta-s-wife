import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
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
}: JSX.IntrinsicElements['div'] &
  FixedGridProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const fixedClasses = container.resolve(FixedGridClasses);
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
