import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import { JSX, PropsWithChildren } from 'react';
import { Element as E } from '../generic/element';
import { AsElementType } from '@/logic/interfaces/props/elementType';
import { ElementProps } from '../generic/element.props';

export const Content = <T extends AnyElement>({
  children,
  ...props
}: ElementProps<T> & AsElementType & PropsWithChildren): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element nameOf='content' {...props}>
      {children}
    </Element>
  );
};
