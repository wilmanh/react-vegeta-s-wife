import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { NavbarLinkProps } from './navbarLink.props';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { NavbarLinkClasses } from './navbarLink.classes';

const NavbarLink = ({
  children,
  className,
  arrowless,
  ...props
}: JSX.IntrinsicElements['a'] &
  PropsWithChildren &
  NavbarLinkProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const classResolver = container.resolve(NavbarLinkClasses);
  const classes = classResolver.prepareClasses({
    arrowless,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='navbar-link'
      as='a'
      {...props}
    >
      {children}
    </Element>
  );
};

export default NavbarLink;
