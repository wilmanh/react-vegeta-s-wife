import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { ContainerProps } from './container.props';

export class ContainerClasses<T extends ContainerProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { fluid, fullhd, max, widescreen } = parameters;
    return {
      ['is-fluid']: fluid,
      ['is-fullhd']: fullhd,
      ['is-widescreen']: widescreen,
      [`is-max-${max}`]: max,
    };
  };
}
