import { container } from 'tsyringe';

import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { ColorClassNameResolver } from '@/logic/classes/classNameResolver/color/colorClassNameResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';

import { NavbarProps } from './navbar.props';

export class NavbarClasses<
  T extends NavbarProps,
> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { transparent, fixed, color, dark, light, shadow, spaced } =
      parameters;
    const colorClass = container.resolve(ColorClassNameResolver);
    return {
      ...colorClass.prepareClasses({
        color,
        dark,
        light,
      }),
      ['is-transparent']: transparent,
      ['is-spaced']: spaced,
      ['has-shadow']: shadow,
      [`is-fixed-${fixed}`]: fixed,
    };
  };
}
