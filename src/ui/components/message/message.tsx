import classNames from 'classnames';
import { JSX, PropsWithChildren } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { ColorClassNameResolver } from '@/logic/classes/classNameResolver/color/colorClassNameResolver';
import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';
import { Color } from '@/logic/interfaces/props/color';
import { Size } from '@/logic/interfaces/props/size';
import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

const Message = ({
  children,
  color,
  light,
  dark,
  size,
  className,
  ...props
}: PropsWithChildren &
  Color &
  Size &
  Omit<
    ElementProps<JSX.IntrinsicElements['article']>,
    'nameOf'
  >): JSX.Element => {
  const sizeClassResolver = container.resolve(SizeClassNameResolver);
  const sizeClasses = sizeClassResolver.prepareClasses({ size });
  const colorClassesResolver = container.resolve(ColorClassNameResolver);
  const colorClasses = colorClassesResolver.prepareClasses({
    color,
    light,
    dark,
  });
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['article']>
  >;
  return (
    <Element
      className={classNames(className, colorClasses, sizeClasses)}
      nameOf='message'
      as={'article'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Message;
