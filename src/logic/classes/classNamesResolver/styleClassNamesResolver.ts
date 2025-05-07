import { GenericObject } from '@/logic/interfaces/genericObject';
import { ClassNameFactory } from '../classNameFactory';
import { Style } from '@/logic/interfaces/props/style';

export class StyleClassNameResolver<T extends Omit<Style, 'static'>> // Exclude 'static' from Style
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { inverted, outlined, rounded } = parameters;
    const classes = {
      'is-rounded': rounded,
      'is-inverted': inverted,
      'is-outlined': outlined,
    };
    return classes;
  };
}
