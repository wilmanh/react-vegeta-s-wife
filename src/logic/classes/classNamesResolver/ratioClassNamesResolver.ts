import { GenericObject } from '@/logic/interfaces/genericObject';
import { ClassNameFactory } from '../classNameFactory';
import { Ratio } from '@/logic/interfaces/props/ratio';

export class RatioClassNameResolver<T extends Ratio>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { ratio } = parameters;
    const classes = {
      [`is-${ratio}`]: ratio,
    };
    return classes;
  };
}
