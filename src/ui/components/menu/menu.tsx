import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const Menu = ({
  children,
  ...props
}: JSX.IntrinsicElements['aside'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='menu' as={'aside'} {...props}>
      {children}
    </Element>
  );
};

export default Menu;
