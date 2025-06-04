import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const MenuList = ({
  children,
  ...props
}: JSX.IntrinsicElements['ul'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='menu-list' as={'ul'} {...props}>
      {children}
    </Element>
  );
};

export default MenuList;
