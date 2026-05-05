import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Element as E } from '../generic/element';
import { ElementProps } from '../generic/element.props';
import { ButtonsClasses } from './buttons.classes';
import { ButtonsProps } from './buttons.props';

export const Buttons = ({
  className,
  children,
  size,
  as,
  ...props
}: ElementProps<JSX.IntrinsicElements['div']> & ButtonsProps): JSX.Element => {
  const classesResolver = container.resolve(ButtonsClasses);
  const tagClasses = classesResolver.prepareClasses({ size });
  const asDefault = as ?? 'div';
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element
      className={classNames(className, tagClasses)}
      as={asDefault}
      nameOf={'buttons'}
      {...props}
    >
      {children}
    </Element>
  );
};
