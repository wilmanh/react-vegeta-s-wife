import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const PanelTabs = ({
  children,
  ...props
}: JSX.IntrinsicElements['div'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  return (
    <Element nameOf='panel-tabs' as={'div'} {...props}>
      {children}
    </Element>
  );
};

export default PanelTabs;
