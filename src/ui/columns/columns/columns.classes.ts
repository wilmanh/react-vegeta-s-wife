import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { ColumnsProps } from './columns.props';
import { Gap } from '@/logic/types/column';
import { getDisplay } from '../getDisplay';

export class ColumnsClasses<T extends ColumnsProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { gap, responsive, gapless, multiline, vCenter, center } = parameters;
    return {
      ['is-mobile']: responsive === 'mobile',
      ['is-desktop']: responsive === 'desktop',
      ['is-vcentered']: vCenter,
      ['is-multiline']: multiline,
      ['is-centered']: center,
      ['is-gapless']: gapless,
      ...getDisplay<Gap>(gap, 'gap'),
    };
  };
}
