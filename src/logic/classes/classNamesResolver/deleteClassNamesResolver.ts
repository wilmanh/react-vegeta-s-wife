import { Delete } from '@/logic/interfaces/props/delete';
import { ClassNameFactory } from '../classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';

export class DeleteClassNameResolver<T extends Delete>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { deleted } = parameters;
    const classes = {
      'is-delete': deleted,
    };
    return classes;
  };
}
