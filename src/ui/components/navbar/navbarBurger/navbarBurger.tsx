import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { State } from '@/logic/interfaces/props/state';
import { NavbarBurgerClasses } from './navbarBurger.classess';
import classNames from 'classnames';

const NavbarBurger = ({
  active,
  className,
  ...props
}: Omit<State, 'focus' | 'hover'> &
  Omit<ElementProps<JSX.IntrinsicElements['a']>, 'nameOf'>): JSX.Element => {
  const classResolver = container.resolve(NavbarBurgerClasses);
  const classes = classResolver.prepareClasses({
    active,
  });
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['a']>
  >;
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
