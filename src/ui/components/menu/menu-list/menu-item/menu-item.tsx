import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { MenuItemProps } from './menu-item.props';
import classNames from 'classnames';

const MenuItem = ({
  href,
  onClick,
  children,
  active,
  ...props
}: JSX.IntrinsicElements['li'] &
  PropsWithChildren &
  MenuItemProps &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  const classes = {
    ['is-active']: active,
  };
  return (
    <Element as={'li'} {...props}>
      <a className={classNames(classes)} href={href} onClick={onClick}>
        {children}
      </a>
    </Element>
  );
};

export default MenuItem;
