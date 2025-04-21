import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import { JSX } from 'react';
import { Element } from '../generic/element';
import { container } from 'tsyringe';
import { ClassNameResolver } from '@/logic/classes/classNamesResolver';
import classNames from 'classnames';
import { PropsOf } from '@/logic/types/propsOf';
import { Size } from '@/logic/interfaces/props/size';

export const Delete = <T extends AnyElement>({
  key,
  ...props
}: PropsOf<T> & Size): JSX.Element | undefined => {
  const classesResolver = container.resolve(ClassNameResolver);

  return (
    <Element
      className={classNames(classesResolver.getClasses(props))}
      nameOf='delete'
      as='button'
      key={key}
      {...props}
    ></Element>
  );
};
