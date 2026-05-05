import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { InputClassNameResolver } from '@/logic/classes/classNameResolver/input/inputClassNameResolver';
import { RoundedClassNameResolver } from '@/logic/classes/classNameResolver/rounded/roundedClassNameResolver';
import { Input as InputProps } from '@/logic/interfaces/props/input';
import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

const Input = ({
  className,
  color,
  dark,
  light,
  rounded,
  size,
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
          size,
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
