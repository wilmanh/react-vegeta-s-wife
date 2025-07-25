import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { Input as InputProps } from '@/logic/interfaces/props/input';
import { container } from 'tsyringe';
import { InputClassNameResolver } from '@/logic/classes/classNamesResolver/inputClassNamesResolver';
import classNames from 'classnames';

const Textarea = ({
  className,
  color,
  dark,
  light,
  size,
  focus,
  hover,
  fixed,
  ...props
}: Omit<InputProps, 'static'> &
  JSX.IntrinsicElements['textarea'] &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const inputClasses = container.resolve(InputClassNameResolver);
  return (
    <Element
      className={classNames(
        className,
        inputClasses.prepareClasses({
          color,
          dark,
          light,
          size,
          focus,
          hover,
          fixed,
        }),
      )}
      nameOf='textarea'
      as={'textarea'}
      {...props}
    />
  );
};

export default Textarea;
