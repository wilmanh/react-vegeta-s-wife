import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import { ClassNameResolver } from '@/logic/classes/classNamesResolver';
import classNames from 'classnames';
import { TagProps } from './tag.props';
import { Element } from '../generic/element';

export const Tag = ({
  hoverable,
  className,
  children,
  rounded,
  deleted,
  color,
  light,
  size,
  dark,
  as,
  ...props
}: (
  | JSX.IntrinsicElements['span']
  | JSX.IntrinsicElements['a']
  | JSX.IntrinsicElements['div']
  | JSX.IntrinsicElements['button']
) &
  TagProps): JSX.Element => {
  const classesResolver = container.resolve(ClassNameResolver);
  const tagClasses = classesResolver.getClasses({
    hoverable,
    rounded,
    color,
    light,
    deleted,
    dark,
    size,
  });
  const asDefault = as ?? 'span';

  return (
    <Element
      className={classNames(className, tagClasses)}
      as={asDefault}
      nameOf={'tag'}
      {...props}
    >
      {children}
    </Element>
  );
};
