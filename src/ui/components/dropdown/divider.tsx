import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const DropdownDivider = ({
  ...props
}: JSX.IntrinsicElements['hr'] & Omit<ElementProps, 'nameOf'>): JSX.Element => {
  return <Element nameOf='dropdown-divider' as={'hr'} {...props} />;
};

export default DropdownDivider;
