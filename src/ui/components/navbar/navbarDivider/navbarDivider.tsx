import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const NavbarDivider = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['hr']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['hr']>
  >;
  return (
    <Element nameOf='navbar-divider' as='hr' {...props}>
      {children}
    </Element>
  );
};

export default NavbarDivider;
