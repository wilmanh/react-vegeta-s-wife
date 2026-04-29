import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { ElementProps } from '@/ui/elements/generic/element.props';

import { Element as E } from '../generic/element';
import { ButtonClasses } from './button.classes';
import { ButtonProps } from './button.props';
import { InputType } from './buttonType';

export const Button = <
  T extends
    | JSX.IntrinsicElements['input']
    | JSX.IntrinsicElements['a']
    | JSX.IntrinsicElements['button'],
>({
  as,
  children,
  key,
  ...props
}: Omit<ElementProps<T>, 'nameOf'> & ButtonProps) => {
  const classesResolver = container.resolve(ButtonClasses);
  const {
    active,
    color,
    dark,
    focus,
    fullwidth,
    hover,
    inverted,
    light,
    loading,
    outlined,
    rounded,
    scale,
    className,
    noResponsive,
    static: frozen,
    ...params
  } = props;
  const classes = {
    'is-responsive': !noResponsive,
    'is-static': frozen,
    ...classesResolver.prepareClasses({
      active,
      color,
      dark,
      focus,
      fullwidth,
      hover,
      inverted,
      light,
      loading,
      outlined,
      rounded,
      scale,
    }),
  };
  const asDefault = as ?? 'button';
  const inputType =
    asDefault !== 'a' && asDefault !== 'button' ? (as as InputType) : undefined;
  const child = !inputType ? children : undefined;
  const value = inputType ? children : undefined;
  if (frozen) {
    return <span className={classNames('button', classes)}>{child}</span>;
  }
  const Element = E as React.ComponentType<
    ElementProps<
      | JSX.IntrinsicElements['input']
      | JSX.IntrinsicElements['a']
      | JSX.IntrinsicElements['button']
    >
  >;
  return (
    <Element
      as={inputType ? 'input' : asDefault}
      nameOf='button'
      className={classNames(classes, className)}
      type={inputType}
      value={value}
      key={key}
      {...params}
    >
      {child}
    </Element>
  );
};
