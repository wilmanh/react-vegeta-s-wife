import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Delete } from '../delete/delete';
import { Element as E } from '../generic/element';
import { ElementProps } from '../generic/element.props';
import { NotificationClasses } from './notification.classes';
import { NotificationProps } from './notification.props';

export const Notification = ({
  as,
  key,
  className,
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
      className={classNames(classes, className)}
      nameOf='notification'
      key={key}
      {...props}
    >
      {onClose ? <Delete onClick={onClose} /> : null}
      {children}
    </Element>
  );
};
