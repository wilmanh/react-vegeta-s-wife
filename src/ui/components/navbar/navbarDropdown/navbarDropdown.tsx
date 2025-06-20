import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import NavbarDropdownProps from './navbarDropdown.props';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { NavbarDropdownClasses } from './navbarDropdown.classess';

const NavbarDropdown = ({
  children,
  boxed,
  className,
  position,
  ...props
}: JSX.IntrinsicElements['div'] &
  PropsWithChildren &
  NavbarDropdownProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const classResolver = container.resolve(NavbarDropdownClasses);
  const classes = classResolver.prepareClasses({
    position,
    boxed,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='navbar-dropdown'
      as='div'
      {...props}
    >
      {children}
    </Element>
  );
};

export default NavbarDropdown;
