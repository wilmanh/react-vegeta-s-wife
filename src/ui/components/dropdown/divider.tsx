import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const DropdownDivider = ({
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['hr']>, 'nameOf'>): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['hr']>
  >;
  return <Element nameOf='dropdown-divider' as={'hr'} {...props} />;
};

export default DropdownDivider;
