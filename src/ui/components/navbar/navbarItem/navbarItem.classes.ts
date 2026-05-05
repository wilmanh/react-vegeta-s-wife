import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { NavbarItemProps } from './navbarItem.props';

export class NavbarItemClasses<T extends NavbarItemProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { dropdown, hoverable, selected, expanded, tab, up } = parameters;
    return {
      ['has-dropdown']: dropdown,
      ['has-dropdown-up']: up,
      ['is-hoverable']: hoverable,
      ['is-selected']: selected,
      ['is-expanded']: expanded,
      ['is-tab']: tab,
    };
  };
}
