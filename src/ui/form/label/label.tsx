import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';

const Label = ({
  className,
  ...props
}: Omit<
  ElementProps<JSX.IntrinsicElements['label']>,
  'nameOf' | 'as'
>): JSX.Element => {
  return (
    <Element
      className={classNames(className)}
      nameOf='label'
      as={'label'}
      {...props}
    />
  );
};

export default Label;
