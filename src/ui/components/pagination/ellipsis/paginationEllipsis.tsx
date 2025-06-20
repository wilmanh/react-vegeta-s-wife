import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const PaginationEllipsis = ({
  ...props
}: JSX.IntrinsicElements['span'] &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  return (
    <li>
      <Element nameOf='pagination-ellipsis' as={'span'} {...props}>
        &hellip;
      </Element>
    </li>
  );
};

export default PaginationEllipsis;
