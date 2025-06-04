import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { DropdownProps } from './dropdown.props';

export class DropdownClasses<T extends Omit<DropdownProps, 'title'>>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { active, hoverable, right, up } = parameters;
    return {
      ['is-up']: up,
      ['is-right']: right,
      ['is-active']: active,
      ['is-hoverable']: hoverable,
    };
  };
}
