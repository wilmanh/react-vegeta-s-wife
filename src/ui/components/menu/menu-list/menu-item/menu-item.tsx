import classNames from 'classnames';
import { JSX, PropsWithChildren } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { StateClassNameResolver } from '@/logic/classes/classNameResolver/state/stateClassNameResolver';
import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

import { MenuItemProps } from './menu-item.props';

const MenuItem = ({
  children,
  className,
  active,
  ...props
}: PropsWithChildren &
  MenuItemProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['a']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const classesResolver = container.resolve(StateClassNameResolver);
  const classes = classesResolver.prepareClasses({
    active,
  });
  return (
    <E nameOf='' as={'li'}>
      <a className={classNames(className, classes)} {...props}>
        {children}
      </a>
    </E>
  );
};

export default MenuItem;
