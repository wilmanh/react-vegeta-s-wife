import { GenericObject } from '@/logic/interfaces/genericObject';
import { Hoverable } from '@/logic/interfaces/props/hoverable';
import { ClassNameFactory } from '../../classNameFactory';

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
