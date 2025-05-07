import { Common } from '@/logic/interfaces/props/common';
import { ClassNameFactory } from '../classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';

export class CommonClassNameResolver<T extends Omit<Common, 'disabled'>> // Exclude 'disabled' from Common
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { loading } = parameters;
    const classes = {
      'is-loading': loading,
    };
    return classes;
  };
}
