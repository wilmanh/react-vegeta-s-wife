import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

import { BreadcrumbProps } from './breadcrumb.props';
import { BreadcrumbClasses } from './breadcrumbs.classes';

export const Breadcrumb = ({
  children,
  position,
  separator,
  size,
  className,
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['nav']>, 'nameOf'> &
  BreadcrumbProps): JSX.Element => {
  const classesResolver = container.resolve(BreadcrumbClasses);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['nav']>
  >;
  const classes = classesResolver.prepareClasses({
    position,
    separator,
    size,
  });
  return (
    <Element
      aria-label='breadcrumbs'
      nameOf='breadcrumb'
      as={'nav'}
      className={classNames(className, classes)}
      {...props}
    >
      <ul>{children}</ul>
    </Element>
  );
};
