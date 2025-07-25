import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { MenuItemProps } from './menu-item.props';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { StateClassNameResolver } from '@/logic/classes/classNamesResolver/stateClassNamesResolver';

const MenuItem = ({
  children,
  className,
  active,
  ...props
}: JSX.IntrinsicElements['a'] &
  PropsWithChildren &
  MenuItemProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const classesResolver = container.resolve(StateClassNameResolver);
  const classes = classesResolver.prepareClasses({
    active,
  });
  return (
    <Element nameOf='' as={'li'}>
      <a className={classNames(className, classes)} {...props}>
        {children}
      </a>
    </Element>
  );
};

export default MenuItem;
