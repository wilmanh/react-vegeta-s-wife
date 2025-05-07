import { GenericObject } from '@/logic/interfaces/genericObject';
import { ClassNameFactory } from '../classNameFactory';
import { Shape } from '@/logic/interfaces/props/shape';

export class ShapeClassNameResolver<T extends Shape>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { shape } = parameters;
    const classes = {
      [`is-${shape}`]: shape,
    };
    return classes;
  };
}
