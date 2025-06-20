import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const NavbarDivider = ({
  children,
  ...props
}: JSX.IntrinsicElements['hr'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  return (
    <Element nameOf='navbar-divider' as='hr' {...props}>
      {children}
    </Element>
  );
};

export default NavbarDivider;
