import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { RatioClassNameResolver } from '@/logic/classes/classNameResolver/ratio/ratioClassNameResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { Ratio } from '@/logic/interfaces/props/ratio';
import { container } from 'tsyringe';

export class VideoClasses<T extends Ratio> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const ratioClass = container.resolve(RatioClassNameResolver);
    return {
      ...ratioClass.prepareClasses({ ratio: parameters.ratio }),
    };
  };
}
