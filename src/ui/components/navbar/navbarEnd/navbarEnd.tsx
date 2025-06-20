import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const NavbarEnd = ({
  children,
  ...props
}: JSX.IntrinsicElements['div'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='navbar-end' as={'div'} {...props}>
      {children}
    </Element>
  );
};

export default NavbarEnd;
