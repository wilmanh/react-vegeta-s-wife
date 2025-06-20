import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const ModalCardFooter = ({
  children,
  ...props
}: JSX.IntrinsicElements['footer'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='modal-card-foot' as={'footer'} {...props}>
      <Element nameOf='buttons' as={'div'}>
        {children}
      </Element>
    </Element>
  );
};

export default ModalCardFooter;
