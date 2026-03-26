import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { ControlProps } from './control.props';
import { ControlClasses } from './control.classes';
import { container } from 'tsyringe';

const Control = ({
  className,
  iconLeft,
  iconRight,
  grouped,
  multiline,
  expanded,
  ...props
}: ControlProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['div']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const controlClasses = container.resolve(ControlClasses);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element
      className={classNames(
        className,
        controlClasses.prepareClasses({
          iconLeft,
          iconRight,
          expanded,
          grouped,
          multiline,
        }),
      )}
      nameOf='control'
      as={'div'}
      {...props}
    />
  );
};

export default Control;
