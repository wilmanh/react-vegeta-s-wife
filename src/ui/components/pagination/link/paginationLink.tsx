import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { PaginationLinkClasses } from './paginationLink.classess';
import { PaginationLinkProps } from './paginationLink.props';
import classNames from 'classnames';

const PaginationLink = ({
  className,
  children,
  current,
  ...props
}: PropsWithChildren &
  PaginationLinkProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['a']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const classResolver = container.resolve(PaginationLinkClasses);
  const classes = classResolver.prepareClasses({
    current,
  });
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['a']>
  >;
  return (
    <li>
      <Element
        className={classNames(className, classes)}
        nameOf='pagination-link'
        as={'a'}
        {...props}
      >
        {children}
      </Element>
    </li>
  );
};

export default PaginationLink;
