import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { TabsTabProps } from './tabsTab.props';
import { StateClassNameResolver } from '@/logic/classes/classNamesResolver/stateClassNamesResolver';
import { container } from 'tsyringe';
import classNames from 'classnames';

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
