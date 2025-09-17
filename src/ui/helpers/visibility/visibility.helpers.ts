import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { getDisplay } from '@/ui/columns/getDisplay';
import {
  VisibilityHelperProps,
  VisibiltyShow,
} from './visibility.helpers.props';

export class VisibilityHelpers<T extends VisibilityHelperProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { hidden, invisible, onlyScreenReader, show } = parameters;
    return {
      ...getDisplay<boolean>(hidden, 'hidden', true),
      ...getDisplay<VisibiltyShow>(show, undefined, false),
      ['is-sr-only']: onlyScreenReader,
      ['is-invisible']: invisible,
    };
  };
}
