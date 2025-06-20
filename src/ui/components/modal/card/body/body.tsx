import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const ModalCardBody = ({
  children,
  ...props
}: JSX.IntrinsicElements['section'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='modal-card-body' as={'section'} {...props}>
      {children}
    </Element>
  );
};

export default ModalCardBody;
