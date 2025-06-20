import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { NavbarItemClasses } from './navbarItem.classes';
import { NavbarItemProps } from './navbarItem.props';
import classNames from 'classnames';

const NavbarItem = ({
  children,
  dropdown,
  up,
  expanded,
  selected,
  tab,
  className,
  hoverable,
  ...props
}: JSX.IntrinsicElements['a'] &
  PropsWithChildren &
  NavbarItemProps &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  const classResolver = container.resolve(NavbarItemClasses);
  const classes = classResolver.prepareClasses({
    hoverable,
    dropdown,
    up,
    expanded,
    selected,
    tab,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='navbar-item'
      as={'a'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default NavbarItem;
