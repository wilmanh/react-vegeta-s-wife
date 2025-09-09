import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { ColorHelperProps } from './color.helpers.props';

export class ColorHelpers<T extends ColorHelperProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { backgroundColor, textColor } = parameters;
    return {
      [`has-background-${backgroundColor}`]: backgroundColor,
      [`has-text-${textColor}`]: textColor,
    };
  };
}
