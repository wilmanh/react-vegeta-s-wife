import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const PaginationList = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['ul']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  return (
    <Element nameOf='pagination-list' as={'ul'} {...props}>
      {children}
    </Element>
  );
};

export default PaginationList;
