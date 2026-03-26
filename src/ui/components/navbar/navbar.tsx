import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { NavbarProps } from './navbar.props';
import classNames from 'classnames';
import { NavbarClasses } from './navbar.classess';
import { Color } from '@/logic/interfaces/props/color';

const Navbar = ({
  children,
  color,
  spaced,
  shadow,
  transparent,
  className,
  ...props
}: PropsWithChildren &
  NavbarProps &
  Color &
  Omit<ElementProps<JSX.IntrinsicElements['nav']>, 'nameOf'>): JSX.Element => {
  const classResolver = container.resolve(NavbarClasses);
  const classes = classResolver.prepareClasses({
    transparent,
    color,
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
