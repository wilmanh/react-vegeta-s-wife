import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const PaginationEllipsis = ({
  ...props
}: Omit<
  ElementProps<JSX.IntrinsicElements['span']>,
  'nameOf' | 'as'
>): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['span']>
  >;
  return (
    <li>
      <Element nameOf='pagination-ellipsis' as={'span'} {...props}>
        &hellip;
      </Element>
    </li>
  );
};

export default PaginationEllipsis;
