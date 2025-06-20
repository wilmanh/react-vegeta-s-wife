import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const NavbarStart = ({
  children,
  ...props
}: JSX.IntrinsicElements['div'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='navbar-start' as={'div'} {...props}>
      {children}
    </Element>
  );
};

export default NavbarStart;
