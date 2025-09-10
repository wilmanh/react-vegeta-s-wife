import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
const LevelRight = ({
  children,
  className,
  ...props
}: Omit<
  ElementProps<JSX.IntrinsicElements['div']>,
  'nameOf' | 'as'
>): JSX.Element => {
  return (
    <Element
      className={classNames(className)}
      nameOf='level-right'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};
export default LevelRight;
