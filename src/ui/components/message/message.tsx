import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { Color } from '@/logic/interfaces/props/color';
import classNames from 'classnames';
import { Size } from '@/logic/interfaces/props/size';
import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';
import { ColorClassNameResolver } from '@/logic/classes/classNameResolver/color/colorClassNameResolver';

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
