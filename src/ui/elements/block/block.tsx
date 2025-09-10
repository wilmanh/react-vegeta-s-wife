import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import { JSX } from 'react';
import { Element } from '../generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

export const Block = <T extends AnyElement>({
  children,
  ...props
}: Omit<ElementProps<T>, 'nameOf'>): JSX.Element | undefined => {
  return (
    <Element nameOf='block' {...props}>
      {children}
    </Element>
  );
};
