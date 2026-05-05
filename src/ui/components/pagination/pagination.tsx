import classNames from 'classnames';
import { JSX, PropsWithChildren } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

import { PaginationClasses } from './pagination.classess';
import { PaginationProps } from './pagination.props';

const Pagination = ({
  isRounded,
  className,
  children,
  position,
  size,
  ...props
}: PropsWithChildren &
  PaginationProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['nav']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const classResolver = container.resolve(PaginationClasses);
  const classes = classResolver.prepareClasses({
    position,
    isRounded,
    size,
  });
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['nav']>
  >;
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='pagination'
      as={'nav'}
      role={props?.role ?? 'navigation'}
      aria-label={props?.['aria-label'] ?? 'pagination'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Pagination;
