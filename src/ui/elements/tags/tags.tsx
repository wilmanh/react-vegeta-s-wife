import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import { ClassNameResolver } from '@/logic/classes/classNamesResolver';
import classNames from 'classnames';
import { TagsProps } from './tags.props';
import { Element } from '../generic/element';

export const Tags = ({
  className,
  children,
  addons,
  ...props
}: (
  | JSX.IntrinsicElements['span']
  | JSX.IntrinsicElements['a']
  | JSX.IntrinsicElements['div']
  | JSX.IntrinsicElements['button']
) &
  TagsProps): JSX.Element => {
  const classesResolver = container.resolve(ClassNameResolver);
  const tagClasses = classesResolver.prepareClasses({ addons });

  return (
    <Element
      className={classNames(className, tagClasses)}
      as={'div'}
      nameOf={'tags'}
      {...props}
    >
      {children}
    </Element>
  );
};
