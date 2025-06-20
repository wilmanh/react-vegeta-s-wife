import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { State } from '@/logic/interfaces/props/state';
import { NavbarBurgerClasses } from './navbarBurger.classess';
import classNames from 'classnames';

const NavbarBurger = ({
  active,
  className,
  ...props
}: JSX.IntrinsicElements['a'] &
  Omit<State, 'focus' | 'hover'> &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  const classResolver = container.resolve(NavbarBurgerClasses);
  const classes = classResolver.prepareClasses({
    active,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='navbar-burger'
      aria-label='menu'
      aria-expanded='false'
      as={'a'}
      {...props}
    >
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </Element>
  );
};

export default NavbarBurger;
