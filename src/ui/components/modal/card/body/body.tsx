import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const ModalCardBody = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['section']>,
    'nameOf'
  >): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['section']>
  >;
  return (
    <Element nameOf='modal-card-body' as={'section'} {...props}>
      {children}
    </Element>
  );
};

export default ModalCardBody;
