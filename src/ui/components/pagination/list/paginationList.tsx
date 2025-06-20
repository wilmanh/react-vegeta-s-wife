import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';

const PaginationList = ({
  children,
  ...props
}: JSX.IntrinsicElements['ul'] &
  PropsWithChildren &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  return (
    <Element nameOf='pagination-list' as={'ul'} {...props}>
      {children}
    </Element>
  );
};

export default PaginationList;
