import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';
import { ElementProps } from '@/ui/elements/generic/element.props';

import Field from '../field';
import { HorizontalFieldProps } from './horizontalField.props';

const HorizontalField = ({
  label,
  body,
  size,
  ...props
}: ElementProps<JSX.IntrinsicElements['div']> &
  HorizontalFieldProps): JSX.Element => {
  const sizeClasses = container
    .resolve(SizeClassNameResolver)
    .prepareClasses({ size });

  return (
    <Field className='is-horizontal' {...props}>
      <div className={classNames('field-label', sizeClasses)}>{label}</div>
      <div className='field-body'>{body}</div>
    </Field>
  );
};

export default HorizontalField;
