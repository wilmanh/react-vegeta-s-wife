import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import classNames from 'classnames';
import { InputType } from './buttonType';
import { container } from 'tsyringe';
import { ClassNameResolver } from '@/logic/classes/classNamesResolver';
import { Element } from '../generic/element';
import { ElementProps } from '@/logic/interfaces/props/element';
import { PropsOf } from '@/logic/types/propsOf';
import { ButtonProps } from './button.props';

export const Button = <T extends AnyElement>({
  as,
  children,
  key,
  ...props
}: PropsOf<T> & Omit<ElementProps, 'nameOf'> & ButtonProps) => {
  const classesResolver = container.resolve(ClassNameResolver);
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
    return <span className={classNames(classes)}>{child}</span>;
  }

  return (
    <Element
      as={inputType ? 'input' : asDefault}
      nameOf='button'
      className={classNames(classes)}
      type={inputType}
      value={value as string}
      key={key}
      {...params}
    >
      {child}
    </Element>
  );
};
