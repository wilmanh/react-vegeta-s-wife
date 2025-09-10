import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const Card = ({
  children,
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf'> &
  PropsWithChildren): JSX.Element => {
  return (
    <Element nameOf='card' as='div' {...props}>
      {children}
    </Element>
  );
};

export default Card;
