import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const NavbarDivider = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['hr']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  return (
    <Element nameOf='navbar-divider' as='hr' {...props}>
      {children}
    </Element>
  );
};

export default NavbarDivider;
