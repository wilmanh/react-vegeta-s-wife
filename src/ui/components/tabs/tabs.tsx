import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
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
  size,
  ...props
}: JSX.IntrinsicElements['div'] &
  PropsWithChildren &
  TabsProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
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
