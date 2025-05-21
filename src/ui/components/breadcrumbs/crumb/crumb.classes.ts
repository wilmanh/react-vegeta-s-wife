import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { CrumbProps } from './crumb.props';

export class CrumbClasses<T extends CrumbProps> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { active } = parameters;
    return {
      [`is-active`]: active,
    };
  };
}
