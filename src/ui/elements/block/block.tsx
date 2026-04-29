import { JSX } from 'react';
import 'reflect-metadata';

import { ElementProps } from '@/ui/elements/generic/element.props';

import { Element as E } from '../generic/element';

export const Block = ({
  children,
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf'>):
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
