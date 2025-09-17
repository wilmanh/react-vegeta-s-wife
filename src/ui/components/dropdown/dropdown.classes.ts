import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { DropdownProps } from './dropdown.props';
import { container } from 'tsyringe';
import { StateClassNameResolver } from '@/logic/classes/classNamesResolver/state/stateClassNamesResolver';

export class DropdownClasses<T extends Omit<DropdownProps, 'title'>>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { active, hoverable, right, up } = parameters;
    const stateClassesResolver = container.resolve(StateClassNameResolver);
    const classes = stateClassesResolver.prepareClasses({
      active,
    });
    return {
      ...classes,
      ['is-down']: !up,
      ['is-up']: up,
      ['is-right']: right,
      ['is-hoverable']: hoverable,
    };
  };
}
