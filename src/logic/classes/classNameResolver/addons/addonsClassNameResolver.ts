import { TagsProps } from '@/ui/elements/tags/tags.props';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { ClassNameFactory } from '../../classNameFactory';

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
