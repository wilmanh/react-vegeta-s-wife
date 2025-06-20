import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
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
  role,
  'aria-label': ariaLabel,
  ...props
}: JSX.IntrinsicElements['nav'] &
  PropsWithChildren &
  NavbarProps &
  Color &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  const classResolver = container.resolve(NavbarClasses);
  const classes = classResolver.prepareClasses({
    transparent,
    color,
    spaced,
    shadow,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='navbar'
      as={'nav'}
      role={role ?? 'navigation'}
      aria-label={ariaLabel ?? 'main navigation'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Navbar;
