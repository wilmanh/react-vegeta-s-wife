import classNames from 'classnames';
import { JSX, PropsWithChildren } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

import { TabsClasses } from './tabs.classes';
import { TabsProps } from './tabs.props';

const Tabs = ({
  className,
  fullwidth,
  position,
  children,
  rounded,
  toggle,
  boxed,
  size,
  ...props
}: PropsWithChildren &
  TabsProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['div']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  const classesResolver = container.resolve(TabsClasses);
  const classes = classesResolver.prepareClasses({
    position,
    size,
    boxed,
    fullwidth,
    rounded,
    toggle,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='tabs'
      as={'div'}
      {...props}
    >
      <ul>{children}</ul>
    </Element>
  );
};

export default Tabs;
