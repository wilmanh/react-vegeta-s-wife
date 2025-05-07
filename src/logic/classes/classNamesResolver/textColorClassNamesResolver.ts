import { GenericObject } from '@/logic/interfaces/genericObject';
import { ClassNameFactory } from '../classNameFactory';
import { TextColor } from '@/logic/interfaces/props/textColor';

export class TextColorClassNameResolver<T extends TextColor>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { textColor } = parameters;
    const classes = {
      [`has-text-${textColor}`]: textColor,
    };
    return classes;
  };
}
