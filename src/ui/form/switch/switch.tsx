import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { InputClassNameResolver } from '@/logic/classes/classNamesResolver/inputClassNamesResolver';
import classNames from 'classnames';
import { Color } from '@/logic/interfaces/props/color';
import { Size } from '@/logic/interfaces/props/size';
import { RoundedClassNameResolver } from '@/logic/classes/classNamesResolver/roundedClassNamesResolver';
import { IsRounded } from '@/logic/interfaces/props/style';

const Switch = ({
  className,
  color,
  isRounded,
  size,
  children,
  ...props
}: Color &
  Size &
  IsRounded &
  JSX.IntrinsicElements['input'] &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const inputClasses = container.resolve(InputClassNameResolver);
  const roundedResolver = container.resolve(RoundedClassNameResolver);
  return (
    <label
      className={classNames(
        'switch',
        roundedResolver.prepareClasses({ isRounded }),
        inputClasses.prepareClasses({
          size,
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
