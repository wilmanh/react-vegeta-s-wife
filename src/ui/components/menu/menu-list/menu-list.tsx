import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const MenuList = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<ElementProps<JSX.IntrinsicElements['ul']>, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='menu-list' as={'ul'} {...props}>
      {children}
    </Element>
  );
};

export default MenuList;
