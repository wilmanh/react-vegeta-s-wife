import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { container } from 'tsyringe';
import { IconProps } from './icon.props';
import { SizeClassNameResolver } from '@/logic/classes/classNamesResolver/size/sizeClassNamesResolver';
import { ColorHelpers } from '@/ui/helpers/colors/colors.helpers';

export class IconClasses<T extends Omit<IconProps, 'text'>>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const sizeClass = container.resolve(SizeClassNameResolver);
    const textColorClass = container.resolve(ColorHelpers);
    return {
      'is-right': parameters?.right,
      'is-left': parameters?.left,
      ...sizeClass.prepareClasses({ size: parameters?.size }),
      ...textColorClass.prepareClasses({ textColor: parameters.textColor }),
    };
  };
}
