import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { Input as InputProps } from '@/logic/interfaces/props/input';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { InputClassNameResolver } from '@/logic/classes/classNameResolver/input/inputClassNameResolver';
import { RoundedClassNameResolver } from '@/logic/classes/classNameResolver/rounded/roundedClassNameResolver';

const Input = ({
  className,
  color,
  dark,
  light,
  rounded,
  scale,
  focus,
  hover,
  static: frozen,
  ...props
}: Omit<InputProps, 'fixed'> &
  Omit<
    ElementProps<JSX.IntrinsicElements['input']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const inputClasses = container.resolve(InputClassNameResolver);
  const roundedClasses = container.resolve(RoundedClassNameResolver);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['input']>
  >;
  return (
    <Element
      className={classNames(
        className,
        roundedClasses.prepareClasses({ rounded }),
        inputClasses.prepareClasses({
          color,
          dark,
          light,
          scale,
          focus,
          hover,
          static: frozen,
        }),
      )}
      nameOf='input'
      as={'input'}
      {...props}
    />
  );
};

export default Input;
