import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { SizeClassNameResolver } from '@/logic/classes/classNamesResolver/sizeClassNamesResolver';
import { TextColorClassNameResolver } from '@/logic/classes/classNamesResolver/textColorClassNamesResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { Size } from '@/logic/interfaces/props/size';
import { TextColor } from '@/logic/interfaces/props/textColor';
import { container } from 'tsyringe';

export class IconClasses<T extends TextColor & Size>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const sizeClass = container.resolve(SizeClassNameResolver);
    const textColorClass = container.resolve(TextColorClassNameResolver);
    return {
      ...sizeClass.prepareClasses({ size: parameters?.size }),
      ...textColorClass.prepareClasses({ textColor: parameters.textColor }),
    };
  };
}
