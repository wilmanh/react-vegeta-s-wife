import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { RatioClassNameResolver } from '@/logic/classes/classNamesResolver/ratio/ratioClassNamesResolver';
import { ShapeClassNameResolver } from '@/logic/classes/classNamesResolver/shape/shapeClassNamesResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { Ratio } from '@/logic/interfaces/props/ratio';
import { Shape } from '@/logic/interfaces/props/shape';
import { container } from 'tsyringe';

export class ImageClasses<T extends Shape & Ratio>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const shapeClass = container.resolve(ShapeClassNameResolver);
    const ratioClass = container.resolve(RatioClassNameResolver);
    return {
      ...shapeClass.prepareClasses({ shape: parameters?.shape }),
      ...ratioClass.prepareClasses({ ratio: parameters.ratio }),
    };
  };
}
