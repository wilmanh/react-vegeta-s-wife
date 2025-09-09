import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
const MediaRight = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['div'] &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  return (
    <Element
      className={classNames(className)}
      nameOf='media-right'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};
export default MediaRight;
