import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
const Media = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['article'] &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
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
