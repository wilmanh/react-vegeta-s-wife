import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { Content } from '@/ui/elements/content/content';

const CardContent = ({
  children,
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf'> &
  PropsWithChildren): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element nameOf='card-content' as='div' {...props}>
      <Content>{children}</Content>
    </Element>
  );
};

export default CardContent;
