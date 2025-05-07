import { GenericObject } from '@/logic/interfaces/genericObject';
import { ClassNameFactory } from '../classNameFactory';
import { Hoverable } from '@/logic/interfaces/props/hoverable';

export class HoverableClassNameResolver<T extends Hoverable>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { hoverable } = parameters;
    const classes = {
      'is-hoverable': hoverable,
    };
    return classes;
  };
}
