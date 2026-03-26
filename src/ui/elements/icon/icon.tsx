import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { IconProps } from './icon.props';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '../generic/element';
import { IconClasses } from './icon.classes';

type IconTags = JSX.IntrinsicElements['span'] | JSX.IntrinsicElements['div'];

export const Icon = ({
  as,
  text,
  scale,
  left,
  right,
  children,
  className,
  textColor,
  ...props
}: Omit<ElementProps<IconTags>, 'nameOf'> & IconProps):
  | JSX.Element
  | undefined => {
  const classesResolver = container.resolve(IconClasses);
  const iconClasses = classesResolver.prepareClasses({
    textColor,
    scale,
    left,
    right,
  });
  const Element = E as React.ComponentType<ElementProps<IconTags>>;

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
