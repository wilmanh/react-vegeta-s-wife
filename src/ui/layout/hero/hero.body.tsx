import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { HeroProps } from './hero.props';
const HeroBody = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['div'] &
  HeroProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
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
