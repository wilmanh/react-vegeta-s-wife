import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { DropdownItemProps } from './dropdownItem.props';

export class DropdownItemClasses<T extends DropdownItemProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { active } = parameters;
    return {
      ['is-active']: active,
    };
  };
}
