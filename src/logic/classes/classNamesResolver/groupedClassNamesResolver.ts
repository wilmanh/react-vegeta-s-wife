import { GenericObject } from '@/logic/interfaces/genericObject';
import { ClassNameFactory } from '../classNameFactory';
import { Grouped } from '@/logic/interfaces/props/grouped';

export class GroupedClassNameResolver<T extends Grouped>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { grouped, multiline } = parameters;
    const classes = {
      'is-grouped-multiline': multiline,
      'is-grouped': grouped,
    };
    return classes;
  };
}
