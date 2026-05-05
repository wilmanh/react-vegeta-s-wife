import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const Background = ({
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf'>): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return <Element nameOf='modal-background' as={'div'} {...props} />;
};

export default Background;
