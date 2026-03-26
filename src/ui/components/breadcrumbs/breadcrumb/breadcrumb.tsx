import 'reflect-metadata';
import { JSX } from 'react';
import { Element as E } from '@/ui/elements/generic/element';
import { BreadcrumbProps } from './breadcrumb.props';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { BreadcrumbClasses } from './breadcrumbs.classes';
import { ElementProps } from '@/ui/elements/generic/element.props';

export const Breadcrumb = ({
  children,
  position,
  separator,
  scale,
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
    scale,
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
