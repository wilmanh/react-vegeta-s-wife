import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import {
  TextAlignment,
  TypographyHelperProps,
  TypographySize,
} from './typography.helpers.props';
import { getDisplay } from '@/ui/columns/getDisplay';

export class TypographyHelpers<T extends TypographyHelperProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { fontFamily, size, textAlignment, textTransformation, textWeight } =
      parameters;
    return {
      ...getDisplay<TypographySize>(size, undefined, false, 'is-size-'),
      ...getDisplay<TextAlignment>(
        textAlignment,
        undefined,
        false,
        'has-text-',
      ),
      [`is-${textTransformation}`]: textTransformation,
      [`has-text-${textWeight}`]: textWeight,
      [`has-family-${fontFamily}`]: fontFamily,
    };
  };
}
