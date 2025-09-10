import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { Delete } from '@/ui/elements/delete/delete';

const ModalCardHeader = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['header']>,
    'nameOf'
  >): JSX.Element => {
  return (
    <Element nameOf='modal-card-head' as={'header'} {...props}>
      {children}
      <Delete aria-label='close' />
    </Element>
  );
};

export default ModalCardHeader;
