import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { State } from '@/logic/interfaces/props/state';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { NavbarMenuClasses } from './navBarMenu.classess';

const NavbarMenu = ({
  children,
  active,
  className,
  as,
  ...props
}: (JSX.IntrinsicElements['div'] | JSX.IntrinsicElements['a']) &
  Omit<State, 'focus' | 'hover'> &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  const classResolver = container.resolve(NavbarMenuClasses);
  const classes = classResolver.prepareClasses({
    active,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='navbar-menu'
      as={as ?? 'div'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default NavbarMenu;
