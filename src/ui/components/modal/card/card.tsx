import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const ModalCard = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf'>): JSX.Element => {
  return (
    <Element nameOf='modal-card' as={'div'} {...props}>
      {children}
    </Element>
  );
};

export default ModalCard;
