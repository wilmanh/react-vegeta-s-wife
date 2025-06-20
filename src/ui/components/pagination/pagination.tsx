import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { PaginationProps } from './pagination.props';
import { container } from 'tsyringe';
import { PagintaionClasses } from './pagination.classess';
import classNames from 'classnames';

const Pagination = ({
  isRounded,
  className,
  children,
  position,
  size,
  role,
  'aria-label': ariaLabel,
  ...props
}: JSX.IntrinsicElements['nav'] &
  PropsWithChildren &
  PaginationProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const classResolver = container.resolve(PagintaionClasses);
  const classes = classResolver.prepareClasses({
    position,
    isRounded,
    size,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='pagination'
      as={'nav'}
      role={role ?? 'navigation'}
      aria-label={ariaLabel ?? 'pagination'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Pagination;
