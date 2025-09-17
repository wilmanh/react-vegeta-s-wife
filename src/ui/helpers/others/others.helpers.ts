import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { OthersHelperProps } from './others.helpers.props';

export class OthersHelpers<T extends OthersHelperProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const {
      clearfix,
      pulledLeft,
      pulledRight,
      overlay,
      clipped,
      radiusless,
      shadowless,
      unselectable,
      clickable,
      relative,
    } = parameters;
    return {
      ['is-clearfix']: clearfix,
      ['is-pulled-left']: pulledLeft,
      ['is-pulled-right']: pulledRight,
      ['is-overlay']: overlay,
      ['is-clipped']: clipped,
      ['is-radiusless']: radiusless,
      ['is-shadowless']: shadowless,
      ['is-unselectable']: unselectable,
      ['is-clickable']: clickable,
      ['is-relative']: relative,
    };
  };
}
