import { TagsProps } from '@/ui/elements/tags/tags.props';
import { ClassNameFactory } from '../classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';

export class AddonsClassNameResolver<T extends TagsProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { addons } = parameters;
    const classes = {
      'has-addons': addons,
    };
    return classes;
  };
}
