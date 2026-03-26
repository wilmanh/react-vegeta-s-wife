import 'reflect-metadata';
import { JSX } from 'react';
import { Element as E } from '../generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

export const Block = ({
  children,
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf' | 'as'>):
  | JSX.Element
  | undefined => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element nameOf='block' {...props}>
      {children}
    </Element>
  );
};
