import { FullWidth } from '@/logic/interfaces/props/fullwidth';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { ClassNameFactory } from '../../classNameFactory';

export class FullwidthClassNameResolver<T extends FullWidth>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { fullwidth } = parameters;
    const classes = {
      'is-fullwidth': fullwidth,
    };
    return classes;
  };
}
