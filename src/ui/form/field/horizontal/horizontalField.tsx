import 'reflect-metadata';
import { JSX } from 'react';
import { HorizontalFieldProps } from './horizontalField.props';
import Field from '../field';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';
import { ElementProps } from '@/ui/elements/generic/element.props';

const HorizontalField = ({
  label,
  body,
  scale,
  ...props
}: ElementProps<JSX.IntrinsicElements['div']> &
  HorizontalFieldProps): JSX.Element => {
  const sizeClasses = container
    .resolve(SizeClassNameResolver)
    .prepareClasses({ scale });

  return (
    <Field className='is-horizontal' {...props}>
      <div className={classNames('field-label', sizeClasses)}>{label}</div>
      <div className='field-body'>{body}</div>
    </Field>
  );
};

export default HorizontalField;
