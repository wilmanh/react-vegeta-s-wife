import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const PanelIcon = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['span']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  return (
    <Element nameOf='panel-icon' as={'span'} {...props}>
      {children}
    </Element>
  );
};

export default PanelIcon;
