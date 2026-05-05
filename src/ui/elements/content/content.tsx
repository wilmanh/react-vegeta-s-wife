import { JSX, PropsWithChildren } from 'react';
import 'reflect-metadata';

import { AsElementType } from '@/logic/interfaces/props/elementType';

import { Element as E } from '../generic/element';
import { ElementProps } from '../generic/element.props';

export const Content = <T extends JSX.IntrinsicElements['div']>({
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
