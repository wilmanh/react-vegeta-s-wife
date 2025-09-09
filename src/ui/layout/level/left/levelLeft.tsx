import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
const LevelLeft = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['div'] &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  return (
    <Element
      className={classNames(className)}
      nameOf='level-left'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};
export default LevelLeft;
