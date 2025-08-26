import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';

const Label = ({
  className,
  ...props
}: JSX.IntrinsicElements['label'] &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
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
