import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';

import { FlexboxHelperProps } from './flexbox.helpers.props';

export class FlexboxHelpers<
  T extends FlexboxHelperProps,
> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const {
      alignContent,
      alignItems,
      justifyContent,
      grow,
      shrink,
      flexDirection,
      flexWrap,
      alignSelf,
    } = parameters;
    return {
      [`is-flex-direction-${flexDirection}`]: flexDirection?.toString(),
      [`is-flex-wrap-${flexWrap}`]: flexWrap?.toString(),
      [`is-justify-content-${justifyContent}`]: justifyContent?.toString(),
      [`is-align-content-${alignContent}`]: alignContent?.toString(),
      [`is-align-items-${alignItems}`]: alignItems?.toString(),
      [`is-align-self-${alignSelf}`]: alignSelf?.toString(),
      [`is-flex-grow-${grow}`]: grow?.toString(),
      [`is-flex-shrink-${shrink}`]: shrink?.toString(),
    };
  };
}
