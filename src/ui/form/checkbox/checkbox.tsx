import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { Color } from '@/logic/interfaces/props/color';
import { Size } from '@/logic/interfaces/props/size';
import { InputClassNameResolver } from '@/logic/classes/classNameResolver/input/inputClassNameResolver';
type CheckboxProps = Color &
  Size &
  Omit<ElementProps<JSX.IntrinsicElements['input']>, 'nameOf' | 'as' | 'size'>;
const Checkbox = ({
  className,
  color,
  scale,
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
          scale,
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
