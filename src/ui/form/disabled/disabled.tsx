import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const Delete = ({
  children,
  ...props
}: Omit<
  ElementProps<JSX.IntrinsicElements['fieldset']>,
  'nameOf' | 'as'
>): JSX.Element => {
  return (
    <Element nameOf='' as={'fieldset'} {...props}>
      {children}
    </Element>
  );
};

export default Delete;
