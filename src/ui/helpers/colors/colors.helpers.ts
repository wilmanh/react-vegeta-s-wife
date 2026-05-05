import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { ColorHelperProps } from './color.helpers.props';

export class ColorHelpers<T extends ColorHelperProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const {
      backgroundColor: bgColor,
      textColor: txtColor,
      backgroundShade,
      textShade,
      backgroundInverted,
      textInverted,
    } = parameters;
    const backgroundColor = `${bgColor}${
      backgroundShade ? `-${backgroundShade}` : ''
    }${backgroundInverted ? '-invert' : ''}`;
    const textColor = `${txtColor}${textShade ? `-${textShade}` : ''}${
      textInverted ? '-invert' : ''
    }`;
    return {
      [`has-background-${backgroundColor}`]: bgColor,
      [`has-text-${textColor}`]: txtColor,
    };
  };
}
