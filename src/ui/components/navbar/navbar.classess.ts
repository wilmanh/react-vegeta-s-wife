import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { NavbarProps } from './navbar.props';
import { Color } from '@/logic/interfaces/props/color';
import { container } from 'tsyringe';
import { ColorClassNameResolver } from '@/logic/classes/classNamesResolver/colorClassNamesResolver';

export class NavbarClasses<T extends NavbarProps & Color>
  implements ClassNameFactory<T>
{
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
