import { GenericObject } from '@/logic/interfaces/genericObject';
import { Size } from '@/logic/interfaces/props/size';

import { ClassNameFactory } from '../../classNameFactory';

export class SizeClassNameResolver<
  T extends Size,
> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { size } = parameters;
    const classes = {
      [`is-${size}`]: size,
    };
    return classes;
  };
}
