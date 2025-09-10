import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { DropdownItemProps } from './dropdownItem.props';
import classNames from 'classnames';
import { StateClassNameResolver } from '@/logic/classes/classNamesResolver/stateClassNamesResolver';

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
