import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import NavbarDropdownProps from './navbarDropdown.props';

export class NavbarDropdownClasses<T extends NavbarDropdownProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { position, boxed } = parameters;
    return {
      ['is-right']: position === 'right',
      ['is-boxed']: boxed,
    };
  };
}
