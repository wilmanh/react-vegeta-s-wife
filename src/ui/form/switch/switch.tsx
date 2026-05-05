import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { InputClassNameResolver } from '@/logic/classes/classNameResolver/input/inputClassNameResolver';
import { RoundedClassNameResolver } from '@/logic/classes/classNameResolver/rounded/roundedClassNameResolver';
import { StyleClassNameResolver } from '@/logic/classes/classNameResolver/style/styleClassNameResolver';
import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

import { SwitchProps } from './switch.props';

const Switch = ({
  className,
  color,
  isRounded,
  inputSize,
  outlined,
  children,
  ...props
}: SwitchProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['input']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const inputClasses = container.resolve(InputClassNameResolver);
  const styleClasses = container.resolve(StyleClassNameResolver);
  const roundedResolver = container.resolve(RoundedClassNameResolver);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['input']>
  >;
  return (
    <label
      className={classNames(
        'switch',
        styleClasses.prepareClasses({ outlined }),
        roundedResolver.prepareClasses({ isRounded }),
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

export default Switch;
