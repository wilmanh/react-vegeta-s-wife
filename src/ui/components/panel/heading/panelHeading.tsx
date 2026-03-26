import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const PanelHeading = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['p']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['p']>
  >;
  return (
    <Element nameOf='panel-heading' as={'p'} {...props}>
      {children}
    </Element>
  );
};

export default PanelHeading;
