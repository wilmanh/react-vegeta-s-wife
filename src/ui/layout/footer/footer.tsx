import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import classNames from 'classnames';
const Footer = ({
  children,
  className,
  ...props
}: Omit<
  ElementProps<JSX.IntrinsicElements['footer']>,
  'nameOf' | 'as'
>): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['footer']>
  >;
  return (
    <Element
      className={classNames(className)}
      nameOf='footer'
      as={'footer'}
      {...props}
    >
      {children}
    </Element>
  );
};
export default Footer;
