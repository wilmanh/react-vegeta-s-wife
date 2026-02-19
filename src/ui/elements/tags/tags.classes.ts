import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { container } from 'tsyringe';
import { TagsProps } from './tags.props';
import { AddonsClassNameResolver } from '@/logic/classes/classNameResolver/addons/addonsClassNameResolver';

export class TagsClasses<T extends TagsProps> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const addonsClass = container.resolve(AddonsClassNameResolver);
    return {
      ...addonsClass.prepareClasses({
        addons: parameters?.addons,
      }),
    };
  };
}
