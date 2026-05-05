import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
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
}: PropsWithChildren &
  NavbarItemProps &
  Omit<ElementProps<JSX.IntrinsicElements['a']>, 'nameOf'>): JSX.Element => {
  const classResolver = container.resolve(NavbarItemClasses);
  const classes = classResolver.prepareClasses({
    hoverable,
    dropdown,
    up,
    expanded,
    selected,
    tab,
  });
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['a']>
  >;
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
