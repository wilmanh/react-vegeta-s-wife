import { GenericObject } from '@/logic/interfaces/genericObject';
import { container } from 'tsyringe';
import { ClassNameFactory } from '../../classNameFactory';
import { Input } from '@/logic/interfaces/props/input';
import { ColorClassNameResolver } from '../color/colorClassNameResolver';
import { SizeClassNameResolver } from '../size/sizeClassNameResolver';
import { StateClassNameResolver } from '../state/stateClassNameResolver';

export class InputClassNameResolver<T extends Input>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const {
      size,
      dark,
      color,
      light,
      focus,
      hover,
      static: frozen,
      fixed,
    } = parameters;
    const colorClass = container.resolve(ColorClassNameResolver);
    const sizeClass = container.resolve(SizeClassNameResolver);
    const stateClass = container.resolve(StateClassNameResolver);
    return {
      ['is-static']: frozen,
      ['has-fixed-size']: fixed,
      ...sizeClass.prepareClasses({ size }),
      ...colorClass.prepareClasses({
        color,
        dark,
        light,
      }),
      ...stateClass.prepareClasses({
        focus,
        hover,
      }),
    };
  };
}
