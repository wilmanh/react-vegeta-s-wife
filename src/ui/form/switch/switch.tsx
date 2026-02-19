import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { Color } from '@/logic/interfaces/props/color';
import { Size } from '@/logic/interfaces/props/size';
import { IsRounded, Style } from '@/logic/interfaces/props/style';
import { InputClassNameResolver } from '@/logic/classes/classNameResolver/input/inputClassNameResolver';
import { StyleClassNameResolver } from '@/logic/classes/classNameResolver/style/styleClassNameResolver';
import { RoundedClassNameResolver } from '@/logic/classes/classNameResolver/rounded/roundedClassNameResolver';

const Switch = ({
  className,
  color,
  isRounded,
  size,
  outlined,
  children,
  htmlProps,
  ...props
}: Color &
  Size &
  Pick<Style, 'outlined'> &
  Style &
  IsRounded &
  Omit<
    ElementProps<JSX.IntrinsicElements['input']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const inputClasses = container.resolve(InputClassNameResolver);
  const styleClasses = container.resolve(StyleClassNameResolver);
  const roundedResolver = container.resolve(RoundedClassNameResolver);
  return (
    <label
      className={classNames(
        'switch',
        styleClasses.prepareClasses({ outlined }),
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
        htmlProps={
          { type: 'checkbox', ...htmlProps } as JSX.IntrinsicElements['input']
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

export default Switch;
