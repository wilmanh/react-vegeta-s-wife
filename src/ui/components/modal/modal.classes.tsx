import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { State } from '@/logic/interfaces/props/state';

export class ModalClasses<T extends Omit<State, 'focus' | 'hover'>>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { active } = parameters;
    return {
      [`is-active`]: active,
    };
  };
}
