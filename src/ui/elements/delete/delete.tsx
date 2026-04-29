import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Size } from '@/logic/interfaces/props/size';

import { Element as E } from '../generic/element';
import { ElementProps } from '../generic/element.props';
import { DeleteClasses } from './delete.classes';

export const Delete = ({
  key,
  className,
  ...props
}: ElementProps<JSX.IntrinsicElements['div']> & Size):
  | JSX.Element
  | undefined => {
  const classesResolver = container.resolve(DeleteClasses);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element
      className={classNames(classesResolver.prepareClasses(props), className)}
      nameOf='delete'
      as='button'
      key={key}
      {...props}
    ></Element>
  );
};
