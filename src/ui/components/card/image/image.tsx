import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const CardImage = ({
  children,
  ...props
}: JSX.IntrinsicElements['div'] &
  Omit<ElementProps, 'nameOf'> &
  PropsWithChildren): JSX.Element => {
  return (
    <Element nameOf='card-image' as='div' {...props}>
      {children}
    </Element>
  );
};

export default CardImage;
