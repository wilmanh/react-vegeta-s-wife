import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
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
}: PropsWithChildren &
  NavbarDropdownProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['div']>,
    'nameOf' | 'as'
  >): JSX.Element => {
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
