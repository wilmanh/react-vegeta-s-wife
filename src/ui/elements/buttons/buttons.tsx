import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { Element as E } from '../generic/element';
import { ButtonsProps } from './buttons.props';
import { ButtonsClasses } from './buttons.classes';
import { ElementProps } from '../generic/element.props';

export const Buttons = ({
  className,
  children,
  scale,
  as,
  ...props
}: ElementProps<JSX.IntrinsicElements['div']> & ButtonsProps): JSX.Element => {
  const classesResolver = container.resolve(ButtonsClasses);
  const tagClasses = classesResolver.prepareClasses({ scale });
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
