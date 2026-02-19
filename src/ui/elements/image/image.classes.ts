import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { RatioClassNameResolver } from '@/logic/classes/classNameResolver/ratio/ratioClassNameResolver';
import { ShapeClassNameResolver } from '@/logic/classes/classNameResolver/shape/shapeClassNameResolver';
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
