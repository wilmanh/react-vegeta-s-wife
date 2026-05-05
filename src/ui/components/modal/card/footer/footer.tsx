import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const ModalCardFooter = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['footer']>,
    'nameOf'
  >): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['footer']>
  >;
  return (
    <Element nameOf='modal-card-foot' as={'footer'} {...props}>
      <Element nameOf='buttons' as={'div'}>
        {children}
      </Element>
    </Element>
  );
};

export default ModalCardFooter;
