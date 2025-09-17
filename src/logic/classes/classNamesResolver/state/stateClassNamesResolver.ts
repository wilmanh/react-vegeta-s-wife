import { GenericObject } from '@/logic/interfaces/genericObject';
import { State } from '@/logic/interfaces/props/state';
import { ClassNameFactory } from '../../classNameFactory';

export class StateClassNameResolver<T extends State>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { active, focus, hover } = parameters;
    const classes = {
      'is-active': active,
      'is-focused': focus,
      'is-hovered': hover,
    };
    return classes;
  };
}
