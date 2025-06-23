import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { StateClassNameResolver } from '@/logic/classes/classNamesResolver/stateClassNamesResolver';
import { container } from 'tsyringe';
import { State } from '@/logic/interfaces/props/state';
import classNames from 'classnames';

const PanelBlock = ({
  children,
  active,
  className,
  ...props
}: JSX.IntrinsicElements['div'] &
  PropsWithChildren &
  Omit<State, 'focus' | 'hover'> &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const stateClass = container.resolve(StateClassNameResolver);
  const classes = stateClass.prepareClasses({
    active,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='panel-block'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default PanelBlock;
