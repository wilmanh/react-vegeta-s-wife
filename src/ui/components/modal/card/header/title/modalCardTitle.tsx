import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const ModalCardTitle = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<ElementProps<JSX.IntrinsicElements['p']>, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='modal-card-title' as={'p'} {...props}>
      {children}
    </Element>
  );
};

export default ModalCardTitle;
