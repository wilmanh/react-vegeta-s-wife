import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { InputClassNameResolver } from '@/logic/classes/classNamesResolver/inputClassNamesResolver';
import classNames from 'classnames';
import { Color } from '@/logic/interfaces/props/color';
import { Size } from '@/logic/interfaces/props/size';

const Radio = ({
  className,
  color,
  size,
  children,
  htmlProps,
  ...props
}: Color &
  Size &
  Omit<
    ElementProps<JSX.IntrinsicElements['input']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const inputClasses = container.resolve(InputClassNameResolver);
  return (
    <label
      className={classNames(
        'b-radio',
        'radio',
        inputClasses.prepareClasses({
          size,
        }),
      )}
    >
      <Element
        {...props}
        className={classNames(className)}
        as={'input'}
        htmlProps={
          { type: 'radio', ...htmlProps } as JSX.IntrinsicElements['input']
        }
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

export default Radio;
