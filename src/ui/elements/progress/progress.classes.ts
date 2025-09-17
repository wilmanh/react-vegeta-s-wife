import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { ColorClassNameResolver } from '@/logic/classes/classNamesResolver/color/colorClassNamesResolver';
import { SizeClassNameResolver } from '@/logic/classes/classNamesResolver/size/sizeClassNamesResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { Color } from '@/logic/interfaces/props/color';
import { Size } from '@/logic/interfaces/props/size';
import { container } from 'tsyringe';

export class ProgressClasses<T extends Color & Size>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const colorClass = container.resolve(ColorClassNameResolver);
    const sizeClass = container.resolve(SizeClassNameResolver);
    return {
      ...colorClass.prepareClasses({
        color: parameters?.color,
        dark: parameters?.dark,
        light: parameters?.light,
      }),
      ...sizeClass.prepareClasses({ size: parameters?.size }),
    };
  };
}
