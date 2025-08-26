import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { SizeClassNameResolver } from '@/logic/classes/classNamesResolver/sizeClassNamesResolver';
import { TextColorClassNameResolver } from '@/logic/classes/classNamesResolver/textColorClassNamesResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { container } from 'tsyringe';
import { IconProps } from './icon.props';

export class IconClasses<T extends Omit<IconProps, 'text'>>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const sizeClass = container.resolve(SizeClassNameResolver);
    const textColorClass = container.resolve(TextColorClassNameResolver);
    return {
      'is-right': parameters?.right,
      'is-left': parameters?.left,
      ...sizeClass.prepareClasses({ size: parameters?.size }),
      ...textColorClass.prepareClasses({ textColor: parameters.textColor }),
    };
  };
}
