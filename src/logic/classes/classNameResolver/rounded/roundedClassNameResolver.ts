import { GenericObject } from '@/logic/interfaces/genericObject';
import { IsRounded, Rounded } from '@/logic/interfaces/props/style';
import { ClassNameFactory } from '../../classNameFactory';

export class RoundedClassNameResolver<T extends IsRounded & Rounded>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { isRounded, rounded } = parameters;
    const classes = {
      'is-rounded': isRounded || rounded,
    };
    return classes;
  };
}
