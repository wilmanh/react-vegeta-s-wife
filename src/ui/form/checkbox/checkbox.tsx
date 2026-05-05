import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { InputClassNameResolver } from '@/logic/classes/classNameResolver/input/inputClassNameResolver';
import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

import { SwitchProps } from '../switch/switch.props';

type CheckboxProps = SwitchProps &
  Omit<ElementProps<JSX.IntrinsicElements['input']>, 'nameOf' | 'as'>;
const Checkbox = ({
  className,
  color,
  inputSize,
  children,
  ...props
}: CheckboxProps): JSX.Element => {
  const inputClasses = container.resolve(InputClassNameResolver);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['input']>
  >;
  return (
    <label
      className={classNames(
        'b-checkbox',
        'checkbox',
        inputClasses.prepareClasses({
          size: inputSize,
        }),
      )}
    >
      <Element
        {...props}
        className={classNames(className)}
        as={'input'}
        type='checkbox'
      />
      <span
        className={classNames(
          'check',
          inputClasses.prepareClasses({
            color,
          }),
        )}
      ></span>
      <span className='control-label'>{children}</span>
    </label>
  );
};

export default Checkbox;
