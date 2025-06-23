import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const PanelIcon = ({
  children,
  ...props
}: JSX.IntrinsicElements['span'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  return (
    <Element nameOf='panel-icon' as={'span'} {...props}>
      {children}
    </Element>
  );
};

export default PanelIcon;
