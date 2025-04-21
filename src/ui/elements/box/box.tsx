import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import { JSX } from 'react';
import { Element } from '../generic/element';
import { ElementProps } from '@/logic/interfaces/props/element';
import { PropsOf } from '@/logic/types/propsOf';

export const Box = <T extends AnyElement>({
  children,
  ...props
}: PropsOf<T> & Omit<ElementProps, 'nameOf'>): JSX.Element | undefined => {
  return (
    <Element nameOf='box' {...props}>
      {children}
    </Element>
  );
};
