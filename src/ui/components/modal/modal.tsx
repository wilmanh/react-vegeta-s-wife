import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import Background from './background/background';
import { ModalClasses } from './modal.classes';
import { container } from 'tsyringe';
import { State } from '@/logic/interfaces/props/state';
import classNames from 'classnames';

const Modal = ({
  children,
  className,
  active,
  ...props
}: JSX.IntrinsicElements['div'] &
  PropsWithChildren &
  Omit<State, 'focus' | 'hover'> &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  const classesResolver = container.resolve(ModalClasses);
  const classes = classesResolver.prepareClasses({ active });
  return (
    <Element
      className={classNames(classes, className)}
      nameOf='modal'
      as={'div'}
      {...props}
    >
      <Background />
      {children}
    </Element>
  );
};

export default Modal;
