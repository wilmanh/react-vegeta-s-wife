import 'reflect-metadata';
import { JSX } from 'react';
import classNames from 'classnames';
import { InputType } from './buttonType';
import { container } from 'tsyringe';
import { Element } from '../generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { ButtonProps } from './button.props';
import { ButtonClasses } from './button.classes';
import { AnyElement } from '@/logic/types/anyElement';

export const Button = <T extends AnyElement>({
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
    htmlProps,
    size,
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
      size,
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

  return (
    <Element
      as={inputType ? 'input' : asDefault}
      nameOf='button'
      className={classNames(classes)}
      htmlProps={
        {
          type: inputType,
          value: value as string,
          ...htmlProps,
        } as
          | JSX.IntrinsicElements['input']
          | JSX.IntrinsicElements['a']
          | JSX.IntrinsicElements['button']
      }
      key={key}
      {...params}
    >
      {child}
    </Element>
  );
};
