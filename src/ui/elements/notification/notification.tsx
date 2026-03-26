import 'reflect-metadata';
import { JSX } from 'react';
import { Element as E } from '../generic/element';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { Delete } from '../delete/delete';
import { NotificationProps } from './notification.props';
import { NotificationClasses } from './notification.classes';
import { ElementProps } from '../generic/element.props';

export const Notification = ({
  as,
  key,
  children,
  onClose,
  ...props
}: ElementProps<JSX.IntrinsicElements['div']> &
  Omit<NotificationProps, 'nameOf'>): JSX.Element | undefined => {
  const classesResolver = container.resolve(NotificationClasses);
  const classes = {
    ...classesResolver.prepareClasses(props),
  };
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
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
