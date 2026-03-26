import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { HeroProps } from './hero.props';
const HeroBody = ({
  children,
  className,
  ...props
}: HeroProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['div']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element
      className={classNames(className)}
      nameOf='hero-body'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default HeroBody;
