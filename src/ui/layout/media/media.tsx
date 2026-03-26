import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import classNames from 'classnames';
const Media = ({
  children,
  className,
  ...props
}: Omit<
  ElementProps<JSX.IntrinsicElements['article']>,
  'nameOf' | 'as'
>): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['article']>
  >;
  return (
    <Element
      className={classNames(className)}
      nameOf='media'
      as={'article'}
      {...props}
    >
      {children}
    </Element>
  );
};
export default Media;
