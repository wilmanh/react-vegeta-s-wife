import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { TabsProps } from './tabs.props';
import { TabsClasses } from './tabs.classes';

const Tabs = ({
  className,
  fullwidth,
  position,
  children,
  rounded,
  toggle,
  boxed,
  scale,
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
    scale,
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
