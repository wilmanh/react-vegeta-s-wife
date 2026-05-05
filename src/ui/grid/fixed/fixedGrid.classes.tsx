import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { getDisplay } from '@/ui/columns/getDisplay';
import { FlexGridSize } from '../common';
import { FixedGridProps } from './fixedGrid.props';

export class FixedGridClasses<T extends FixedGridProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { columns, autoCount } = parameters;
    return {
      ['has-auto-count']: autoCount,
      ...getDisplay<FlexGridSize>(columns, undefined, false, 'has-', '-cols'),
    };
  };
}
