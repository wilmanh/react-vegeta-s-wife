import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import { NavbarProps } from './navbar.props';
import classNames from 'classnames';
import { NavbarClasses } from './navbar.classess';
import { Color } from '@/logic/interfaces/props/color';

const Navbar = ({
  children,
  color,
  spaced,
  shadow,
  transparent,
  className,
  htmlProps,
  ...props
}: PropsWithChildren &
  NavbarProps &
  Color &
  Omit<ElementProps<JSX.IntrinsicElements['nav']>, 'nameOf'>): JSX.Element => {
  const classResolver = container.resolve(NavbarClasses);
  const classes = classResolver.prepareClasses({
    transparent,
    color,
    spaced,
    shadow,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='navbar'
      as={'nav'}
      htmlProps={{
        role: htmlProps?.role ?? 'navigation',
        'aria-label': htmlProps?.ariaLabel ?? 'main navigation',
        ...htmlProps,
      }}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Navbar;
