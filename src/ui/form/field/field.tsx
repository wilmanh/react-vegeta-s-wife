import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { FieldProps } from './field.props';
import { container } from 'tsyringe';
import { FieldClasses } from './field.classes';

const Field = ({
  addons,
  grouped,
  position,
  multiline,
  className,
  ...props
}: JSX.IntrinsicElements['div'] &
  FieldProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const fieldClasses = container.resolve(FieldClasses);
  return (
    <Element
      className={classNames(
        className,
        fieldClasses.prepareClasses({ addons, grouped, multiline, position }),
      )}
      nameOf='field'
      as={'div'}
      {...props}
    />
  );
};

export default Field;
