import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { State } from '@/logic/interfaces/props/state';
import classNames from 'classnames';
import { StateClassNameResolver } from '@/logic/classes/classNameResolver/state/stateClassNameResolver';

const PanelTab = ({
  active,
  children,
  className,
  ...props
}: PropsWithChildren &
  Omit<State, 'focus' | 'hover'> &
  Omit<
    ElementProps<JSX.IntrinsicElements['a']>,
    'nameOf' | 'as'
  >): JSX.Element => {
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
