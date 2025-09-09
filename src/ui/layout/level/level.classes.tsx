import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { LevelProps } from './level.props';

export class LevelClasses<T extends LevelProps> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { mobile } = parameters;
    return {
      [`is-mobile`]: mobile,
    };
  };
}
