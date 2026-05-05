import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const NavbarStart = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf'>): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element nameOf='navbar-start' as={'div'} {...props}>
      {children}
    </Element>
  );
};

export default NavbarStart;
