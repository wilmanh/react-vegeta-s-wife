import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const Menu = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['aside']>,
    'nameOf'
  >): JSX.Element => {
  return (
    <Element nameOf='menu' as={'aside'} {...props}>
      {children}
    </Element>
  );
};

export default Menu;
