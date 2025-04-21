import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import { JSX } from 'react';
import { Element } from '../generic/element';
import { PropsOf } from '@/logic/types/propsOf';
import { container } from 'tsyringe';
import { ClassNameResolver } from '@/logic/classes/classNamesResolver';
import classNames from 'classnames';
import { Delete } from '../delete/delete';
import { NotificationProps } from './notification.props';

export const Notification = <T extends AnyElement>({
  as,
  key,
  children,
  onClose,
  ...props
}: PropsOf<T> & Omit<NotificationProps, 'nameOf'>): JSX.Element | undefined => {
  const classesResolver = container.resolve(ClassNameResolver);
  const classes = {
    ...classesResolver.getClasses(props),
  };
  return (
    <Element
      as={as}
      className={classNames(classes)}
      nameOf='notification'
      key={key}
      {...props}
    >
      {onClose ? <Delete onClick={onClose} /> : null}
      {children}
    </Element>
  );
};
