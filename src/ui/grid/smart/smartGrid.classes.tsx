import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { SmartGridProps } from './smartGrid.props';

export class SmartGridClasses<T extends SmartGridProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { columnGap, columnSize, gap, rowGap } = parameters;
    return {
      [`is-col-min-${columnSize}`]: columnSize,
      [`is-gap-${gap}`]: Number(gap) >= 0,
      [`is-column-gap-${columnGap}`]: Number(columnGap) >= 0,
      [`is-row-gap-${rowGap}`]: Number(rowGap) >= 0,
    };
  };
}
