import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const Delete = ({
  children,
  ...props
}: Omit<
  ElementProps<JSX.IntrinsicElements['fieldset']>,
  'nameOf' | 'as'
>): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['fieldset']>
  >;
  return (
    <Element nameOf='' as={'fieldset'} {...props}>
      {children}
    </Element>
  );
};

export default Delete;
