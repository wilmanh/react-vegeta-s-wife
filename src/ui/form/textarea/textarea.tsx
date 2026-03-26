import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { Input as InputProps } from '@/logic/interfaces/props/input';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { InputClassNameResolver } from '@/logic/classes/classNameResolver/input/inputClassNameResolver';

const Textarea = ({
  className,
  color,
  dark,
  light,
  scale,
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
          scale,
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
