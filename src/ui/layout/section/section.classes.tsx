import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { SectionProps } from './section.props';

export class SectionClasses<T extends SectionProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { size } = parameters;
    return {
      [`is-${size}`]: size,
    };
  };
}
