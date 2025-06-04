import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const MenuLabel = ({
  children,
  ...props
}: JSX.IntrinsicElements['p'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='menu-label' as={'p'} {...props}>
      {children}
    </Element>
  );
};

export default MenuLabel;
