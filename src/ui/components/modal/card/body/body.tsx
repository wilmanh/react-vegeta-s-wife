import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const ModalCardBody = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['section']>,
    'nameOf'
  >): JSX.Element => {
  return (
    <Element nameOf='modal-card-body' as={'section'} {...props}>
      {children}
    </Element>
  );
};

export default ModalCardBody;
