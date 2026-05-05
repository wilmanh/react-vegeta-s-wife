import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { LevelItemProps } from './levelItem.props';

export class LevelItemClasses<T extends LevelItemProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { textCentered } = parameters;
    return {
      [`has-text-centered`]: textCentered,
    };
  };
}
