import { GenericObject } from '@/logic/interfaces/genericObject';
import { ClassNameFactory } from '../classNameFactory';
import { HeadingProps } from '@/ui/elements/headings/heading.props';

export class HeadingClassNameResolver<T extends Omit<HeadingProps, 'as'>>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { hSize, spaced } = parameters;
    const classes = {
      [`is-${hSize}`]: !!hSize,
      'is-spaced': spaced,
    };
    return classes;
  };
}
