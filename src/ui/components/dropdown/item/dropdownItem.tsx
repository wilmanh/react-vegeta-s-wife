import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { DropdownItemClasses } from './dropdownItem.classes';
import { DropdownItemProps } from './dropdownItem.props';
import classNames from 'classnames';

const DropdownItem = ({
  as,
  active,
  children,
  className,
  ...props
}: (JSX.IntrinsicElements['div'] | JSX.IntrinsicElements['a']) &
  Omit<ElementProps, 'nameOf'> &
  DropdownItemProps &
  PropsWithChildren): JSX.Element => {
  const classesResolver = container.resolve(DropdownItemClasses);
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
