import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { DropdownProps } from './dropdown.props';
import { Button } from '@/ui/elements/button/button';
import { Icon } from '@/ui/elements/icon/icon';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { container } from 'tsyringe';
import { DropdownClasses } from './dropdown.classes';
import classNames from 'classnames';
import { Color } from '@/logic/interfaces/props/color';
import { ColorClassNameResolver } from '@/logic/classes/classNamesResolver/colorClassNamesResolver';

const Dropdown = ({
  className,
  htmlProps,
  hoverable,
  children,
  active,
  title,
  right,
  color,
  light,
  dark,
  up,
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf'> &
  PropsWithChildren &
  Color &
  DropdownProps): JSX.Element => {
  const classesResolver = container.resolve(DropdownClasses);
  const colorClassesResolver = container.resolve(ColorClassNameResolver);
  const classes = classesResolver.prepareClasses({
    active,
    hoverable,
    right,
    up,
  });
  const colorClasses = colorClassesResolver.prepareClasses({
    color,
    light,
    dark,
  });

  return (
    <Element
      className={classNames(className, classes)}
      nameOf='dropdown'
      as='div'
      {...props}
    >
      <Element nameOf='dropdown-trigger' as='div'>
        <Button
          className={classNames(colorClasses)}
          aria-haspopup='true'
          aria-controls='testing'
        >
          <span>{title}</span>
          <Icon>
            <MdKeyboardArrowDown />
          </Icon>
        </Button>
      </Element>
      <Element
        nameOf='dropdown-menu'
        htmlProps={{ id: 'testing', role: 'menu', ...htmlProps }}
        as='div'
      >
        <Element nameOf='dropdown-content' as='div'>
          {children}
        </Element>
      </Element>
    </Element>
  );
};

export default Dropdown;
