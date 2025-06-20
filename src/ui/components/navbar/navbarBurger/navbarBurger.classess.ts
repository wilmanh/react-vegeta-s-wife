import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { StateClassNameResolver } from '@/logic/classes/classNamesResolver/stateClassNamesResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { State } from '@/logic/interfaces/props/state';
import { container } from 'tsyringe';

export class NavbarBurgerClasses<T extends Omit<State, 'focus' | 'hover'>>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const stateClass = container.resolve(StateClassNameResolver);

    return {
      ...stateClass.prepareClasses({
        active: parameters?.active,
      }),
    };
  };
}
