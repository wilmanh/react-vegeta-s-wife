import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { getDisplay } from '@/ui/columns/getDisplay';

import {
  VisibilityHelperProps,
  VisibiltyShow,
} from './visibility.helpers.props';

export class VisibilityHelpers<
  T extends VisibilityHelperProps,
> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { isHidden, invisible, onlyScreenReader, isShow } = parameters;
    return {
      ...getDisplay<boolean>(isHidden, 'hidden', true),
      ...getDisplay<VisibiltyShow>(isShow, undefined, false),
      ['is-sr-only']: onlyScreenReader,
      ['is-invisible']: invisible,
    };
  };
}
