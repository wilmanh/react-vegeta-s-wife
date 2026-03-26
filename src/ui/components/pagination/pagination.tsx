import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { PaginationProps } from './pagination.props';
import { container } from 'tsyringe';
import { PagintaionClasses } from './pagination.classess';
import classNames from 'classnames';

const Pagination = ({
  isRounded,
  className,
  children,
  position,
  scale,
  ...props
}: PropsWithChildren &
  PaginationProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['nav']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const classResolver = container.resolve(PagintaionClasses);
  const classes = classResolver.prepareClasses({
    position,
    isRounded,
    scale,
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
