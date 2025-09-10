import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const PanelHeading = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['p']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  return (
    <Element nameOf='panel-heading' as={'p'} {...props}>
      {children}
    </Element>
  );
};

export default PanelHeading;
