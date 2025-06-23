import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const PanelHeading = ({
  children,
  ...props
}: JSX.IntrinsicElements['p'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  return (
    <Element nameOf='panel-heading' as={'p'} {...props}>
      {children}
    </Element>
  );
};

export default PanelHeading;
