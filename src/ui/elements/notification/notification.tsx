import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import { JSX } from 'react';
import { Element } from '../generic/element';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { Delete } from '../delete/delete';
import { NotificationProps } from './notification.props';
import { NotificationClasses } from './notification.classes';
import { ElementProps } from '../generic/element.props';

export const Notification = <T extends AnyElement>({
  as,
  key,
  children,
  onClose,
  ...props
}: ElementProps<T> & Omit<NotificationProps, 'nameOf'>):
  | JSX.Element
  | undefined => {
  const classesResolver = container.resolve(NotificationClasses);
  const classes = {
    ...classesResolver.prepareClasses(props),
  };
  return (
    <Element
      as={as}
      className={classNames(classes)}
      nameOf='notification'
      key={key}
      {...props}
    >
      {onClose ? <Delete htmlProps={{ onClick: onClose }} /> : null}
      {children}
    </Element>
  );
};
