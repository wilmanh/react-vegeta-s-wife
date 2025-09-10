import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
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
