import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { IconProps } from './icon.props';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '../generic/element';
import { IconClasses } from './icon.classes';

export const Icon = ({
  as,
  text,
  size,
  left,
  right,
  children,
  className,
  textColor,
  ...props
}: Omit<
  ElementProps<JSX.IntrinsicElements['span'] | JSX.IntrinsicElements['div']>,
  'nameOf'
> &
  IconProps): JSX.Element | undefined => {
  const classesResolver = container.resolve(IconClasses);
  const iconClasses = classesResolver.prepareClasses({
    textColor,
    size,
    left,
    right,
  });
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
