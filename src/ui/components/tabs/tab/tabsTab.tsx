import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { TabsTabProps } from './tabsTab.props';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { StateClassNameResolver } from '@/logic/classes/classNameResolver/state/stateClassNameResolver';

const Tab = ({
  children,
  active,
  className,
  anchorProps,
  ...props
}: PropsWithChildren &
  TabsTabProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['li']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const classesResolver = container.resolve(StateClassNameResolver);
  const classes = classesResolver.prepareClasses({ active });
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['li']>
  >;
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='tab'
      as={'li'}
      {...props}
    >
      <a {...anchorProps}>{children}</a>
    </Element>
  );
};

export default Tab;
