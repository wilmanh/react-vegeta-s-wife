import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
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
}: JSX.IntrinsicElements['div'] &
  ControlProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const controlClasses = container.resolve(ControlClasses);
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
