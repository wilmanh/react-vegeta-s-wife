import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
const Footer = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['footer'] &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
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
