import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { DropdownItemProps } from './dropdownItem.props';
import classNames from 'classnames';
import { StateClassNameResolver } from '@/logic/classes/classNameResolver/state/stateClassNameResolver';

const DropdownItem = ({
  as,
  active,
  children,
  className,
  ...props
}: Omit<
  ElementProps<JSX.IntrinsicElements['div'] | JSX.IntrinsicElements['a']>,
  'nameOf'
> &
  DropdownItemProps &
  PropsWithChildren): JSX.Element => {
  const classesResolver = container.resolve(StateClassNameResolver);
  const classes = classesResolver.prepareClasses({
    active,
  });
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div'] | JSX.IntrinsicElements['a']>
  >;
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='dropdown-item'
      as={as ?? 'div'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default DropdownItem;
