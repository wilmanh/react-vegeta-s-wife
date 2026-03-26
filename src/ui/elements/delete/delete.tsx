import 'reflect-metadata';
import { JSX } from 'react';
import { Element as E } from '../generic/element';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { Size } from '@/logic/interfaces/props/size';
import { DeleteClasses } from './delete.classes';
import { ElementProps } from '../generic/element.props';

export const Delete = ({
  key,
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
      className={classNames(classesResolver.prepareClasses(props))}
      nameOf='delete'
      as='button'
      key={key}
      {...props}
    ></Element>
  );
};
