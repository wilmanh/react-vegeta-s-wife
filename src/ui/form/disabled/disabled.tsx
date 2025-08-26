import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const Delete = ({
  children,
  ...props
}: JSX.IntrinsicElements['fieldset'] &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  return (
    <Element nameOf='' as={'fieldset'} {...props}>
      {children}
    </Element>
  );
};

export default Delete;
