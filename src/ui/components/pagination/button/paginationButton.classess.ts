import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { Common } from '@/logic/interfaces/props/common';

export class PaginationButtonClasses<T extends Omit<Common, 'loading'>>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { disabled } = parameters;
    return {
      ['is-disabled']: disabled,
    };
  };
}
