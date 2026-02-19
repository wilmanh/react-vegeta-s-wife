import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { Size } from '@/logic/interfaces/props/size';
import { container } from 'tsyringe';

export class ButtonsClasses<T extends Size> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const sizeClass = container.resolve(SizeClassNameResolver);
    return {
      ...sizeClass.prepareClasses({ size: parameters?.size }),
    };
  };
}
