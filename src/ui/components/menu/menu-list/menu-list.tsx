import { JSX, PropsWithChildren } from 'react';
import 'reflect-metadata';

import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

const MenuList = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<ElementProps<JSX.IntrinsicElements['ul']>, 'nameOf'>): JSX.Element => {
  return (
    <E nameOf='menu-list' as={'ul'} {...props}>
      {children}
    </E>
  );
};

export default MenuList;
