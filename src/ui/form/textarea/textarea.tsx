import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { InputClassNameResolver } from '@/logic/classes/classNameResolver/input/inputClassNameResolver';
import { Input as InputProps } from '@/logic/interfaces/props/input';
import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

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
  Omit<
    ElementProps<JSX.IntrinsicElements['textarea']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const inputClasses = container.resolve(InputClassNameResolver);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['textarea']>
  >;
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
