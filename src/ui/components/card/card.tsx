import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const Card = ({
  children,
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf'> &
  PropsWithChildren): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element nameOf='card' as='div' {...props}>
      {children}
    </Element>
  );
};

export default Card;
