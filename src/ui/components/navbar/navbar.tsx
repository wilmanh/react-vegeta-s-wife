import classNames from 'classnames';
import { JSX, PropsWithChildren } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

import { NavbarClasses } from './navbar.classess';
import { NavbarProps } from './navbar.props';

const Navbar = ({
  children,
  color,
  spaced,
  dark,
  light,
  shadow,
  transparent,
  className,
  ...props
}: PropsWithChildren &
  NavbarProps &
  Omit<ElementProps<JSX.IntrinsicElements['nav']>, 'nameOf'>): JSX.Element => {
  const classResolver = container.resolve(NavbarClasses);
  const classes = classResolver.prepareClasses({
    transparent,
    color,
    dark,
    light,
    spaced,
    shadow,
  });
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['nav']>
  >;
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='navbar'
      as={'nav'}
      role={props?.role ?? 'navigation'}
      aria-label={props?.['aria-label'] ?? 'main navigation'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Navbar;
