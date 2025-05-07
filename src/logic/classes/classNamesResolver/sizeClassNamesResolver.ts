import { GenericObject } from '@/logic/interfaces/genericObject';
import { ClassNameFactory } from '../classNameFactory';
import { Size } from '@/logic/interfaces/props/size';

export class SizeClassNameResolver<T extends Size>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { size } = parameters;
    const classes = {
      [`is-${size}`]: size,
    };
    return classes;
  };
}
