import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { StateClassNameResolver } from '@/logic/classes/classNamesResolver/stateClassNamesResolver';
import { container } from 'tsyringe';
import { State } from '@/logic/interfaces/props/state';
import classNames from 'classnames';

const PanelTab = ({
  active,
  children,
  className,
  ...props
}: JSX.IntrinsicElements['a'] &
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
      nameOf='panel-tabs'
      as={'a'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default PanelTab;
