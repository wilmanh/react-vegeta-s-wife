import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { Input as InputProps } from '@/logic/interfaces/props/input';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { InputClassNameResolver } from '@/logic/classes/classNamesResolver/input/inputClassNamesResolver';
import { RoundedClassNameResolver } from '@/logic/classes/classNamesResolver/rounded/roundedClassNamesResolver';

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
