import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { Element } from '../generic/element';
import { ButtonsProps } from './buttons.props';
import { ButtonsClasses } from './buttons.classes';
import { ElementProps } from '../generic/element.props';

export const Buttons = ({
  className,
  children,
  size,
  as,
  ...props
}: ElementProps<JSX.IntrinsicElements['p'] | JSX.IntrinsicElements['div']> &
  ButtonsProps): JSX.Element => {
  const classesResolver = container.resolve(ButtonsClasses);
  const tagClasses = classesResolver.prepareClasses({ size });
  const asDefault = as ?? 'div';
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
