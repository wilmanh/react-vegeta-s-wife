import { GenericObject } from '@/logic/interfaces/genericObject';
import { Color } from '@/logic/interfaces/props/color';

import { ClassNameFactory } from '../../classNameFactory';

export class ColorClassNameResolver<
  T extends Color,
> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { color, dark, light } = parameters;
    const classes = {
      [`is-${color}`]: color,
      'is-dark': dark,
      'is-light': light,
    };
    return classes;
  };
}
