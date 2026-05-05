import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { Delete } from '@/ui/elements/delete/delete';

const ModalCardHeader = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['header']>,
    'nameOf'
  >): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['header']>
  >;
  return (
    <Element nameOf='modal-card-head' as={'header'} {...props}>
      {children}
      <Delete aria-label='close' />
    </Element>
  );
};

export default ModalCardHeader;
