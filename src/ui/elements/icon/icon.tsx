import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { ElementProps } from '@/ui/elements/generic/element.props';

import { Element as E } from '../generic/element';
import { IconClasses } from './icon.classes';
import { IconProps } from './icon.props';

type IconTags = JSX.IntrinsicElements['span'] | JSX.IntrinsicElements['div'];

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
}: Omit<ElementProps<IconTags>, 'nameOf'> & IconProps):
  | JSX.Element
  | undefined => {
  const classesResolver = container.resolve(IconClasses);
  const iconClasses = classesResolver.prepareClasses({
    textColor,
    size,
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
