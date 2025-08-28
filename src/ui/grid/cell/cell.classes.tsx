import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { CellProps } from './cell.props';

export class CellClasses<T extends CellProps> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { colEnd, colSpan, colStart, rowEnd, rowSpan, rowStart } = parameters;
    return {
      [`is-col-start-${colStart}`]: colStart,
      [`is-col-from-end-${colEnd}`]: colEnd,
      [`is-col-span-${colSpan}`]: colSpan,
      [`is-row-start-${rowStart}`]: rowStart,
      [`is-row-from-end-${rowEnd}`]: rowEnd,
      [`is-row-span-${rowSpan}`]: rowSpan,
    };
  };
}
