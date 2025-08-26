import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { ControlProps } from './control.props';

export class ControlClasses<T extends ControlProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { iconLeft, iconRight, expanded, grouped, multiline } = parameters;
    return {
      [`has-icons-left`]: iconLeft,
      [`has-icons-right`]: iconRight,
      [`is-expanded`]: expanded,
      [`is-grouped`]: !!grouped || !!multiline,
      [`is-grouped-multiline`]: multiline,
      [`is-grouped-centered `]: grouped === 'centered',
      [`is-grouped-right`]: grouped === 'right',
    };
  };
}
