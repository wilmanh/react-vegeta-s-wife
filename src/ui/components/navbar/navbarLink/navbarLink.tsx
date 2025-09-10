import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
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
}: PropsWithChildren &
  NavbarLinkProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['a']>,
    'nameOf' | 'as'
  >): JSX.Element => {
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
