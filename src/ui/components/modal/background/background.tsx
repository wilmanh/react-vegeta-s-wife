import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const Background = ({
  ...props
}: JSX.IntrinsicElements['div'] &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  return <Element nameOf='modal-background' as={'div'} {...props} />;
};

export default Background;
