import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { HeroProps } from './hero.props';
import { container } from 'tsyringe';
import { HeroClasses } from './hero.classes';
const Hero = ({
  color,
  as,
  size,
  children,
  className,
  withNavbar,
  ...props
}: HeroProps &
  Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf'>): JSX.Element => {
  const heroClasses = container.resolve(HeroClasses);
  return (
    <Element
      className={classNames(
        className,
        heroClasses.prepareClasses({ color, size, withNavbar }),
      )}
      nameOf='hero'
      as={as ?? 'div'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Hero;
