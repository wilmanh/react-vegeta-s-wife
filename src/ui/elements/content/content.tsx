import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import { JSX, PropsWithChildren } from 'react';
import { Element } from '../generic/element';
import { PropsOf } from '@/logic/types/propsOf';
import { AsElementType } from '@/logic/interfaces/props/elementType';

export const Content = <T extends AnyElement>({
  children,
  ...props
}: PropsOf<T> & AsElementType & PropsWithChildren): JSX.Element | undefined => {
  return (
    <Element nameOf='content' {...props}>
      {children}
    </Element>
  );
};
