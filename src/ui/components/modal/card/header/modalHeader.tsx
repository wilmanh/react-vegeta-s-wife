import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { Delete } from '@/ui/elements/delete/delete';

const ModalCardHeader = ({
  children,
  ...props
}: JSX.IntrinsicElements['header'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='modal-card-head' as={'header'} {...props}>
      {children}
      <Delete aria-label='close' />
    </Element>
  );
};

export default ModalCardHeader;
