import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { Content } from '@/ui/elements/content/content';

const CardContent = ({
  children,
  ...props
}: JSX.IntrinsicElements['div'] &
  Omit<ElementProps, 'nameOf'> &
  PropsWithChildren): JSX.Element => {
  return (
    <Element nameOf='card-content' as='div' {...props}>
      <Content>{children}</Content>
    </Element>
  );
};

export default CardContent;
