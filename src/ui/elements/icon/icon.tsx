import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import { ClassNameResolver } from '@/logic/classes/classNamesResolver';
import classNames from 'classnames';
import { IconProps } from './icon.props';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '../generic/element';

export const Icon = ({
  as,
  text,
  children,
  className,
  size,
  textColor,
  ...props
}: (JSX.IntrinsicElements['span'] | JSX.IntrinsicElements['div']) &
  Omit<ElementProps, 'nameOf'> &
  IconProps): JSX.Element | undefined => {
  const classesResolver = container.resolve(ClassNameResolver);
  const iconClasses = classesResolver.getClasses({ textColor, size });
  const asDefault = as ?? 'span';
  return (
    <Element
      className={classNames(className, iconClasses)}
      as={asDefault}
      nameOf={text ? 'icon-text' : 'icon'}
      {...props}
    >
      {children}
    </Element>
  );
};
