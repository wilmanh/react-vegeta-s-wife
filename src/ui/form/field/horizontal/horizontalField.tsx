import 'reflect-metadata';
import { JSX } from 'react';
import { HorizontalFieldProps } from './horizontalField.props';
import Field from '../field';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';

const HorizontalField = ({
  label,
  body,
  size,
}: HorizontalFieldProps): JSX.Element => {
  const sizeClasses = container
    .resolve(SizeClassNameResolver)
    .prepareClasses({ size });
  return (
    <Field className='is-horizontal'>
      <div className={classNames('field-label', sizeClasses)}>{label}</div>
      <div className='field-body'>{body}</div>
    </Field>
  );
};

export default HorizontalField;
