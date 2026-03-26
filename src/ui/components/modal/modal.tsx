import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import Background from './background/background';
import { container } from 'tsyringe';
import { State } from '@/logic/interfaces/props/state';
import classNames from 'classnames';
import { StateClassNameResolver } from '@/logic/classes/classNameResolver/state/stateClassNameResolver';

const Modal = ({
  children,
  className,
  active,
  ...props
}: PropsWithChildren &
  Omit<State, 'focus' | 'hover'> &
  Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf'>): JSX.Element => {
  const classesResolver = container.resolve(StateClassNameResolver);
  const classes = classesResolver.prepareClasses({ active });
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
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
