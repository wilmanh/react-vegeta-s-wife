import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const MenuLabel = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<ElementProps<JSX.IntrinsicElements['p']>, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='menu-label' as={'p'} {...props}>
      {children}
    </Element>
  );
};

export default MenuLabel;
