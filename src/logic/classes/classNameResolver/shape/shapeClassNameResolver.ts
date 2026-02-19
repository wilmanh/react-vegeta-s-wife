import { GenericObject } from '@/logic/interfaces/genericObject';
import { Shape } from '@/logic/interfaces/props/shape';
import { ClassNameFactory } from '../../classNameFactory';

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
