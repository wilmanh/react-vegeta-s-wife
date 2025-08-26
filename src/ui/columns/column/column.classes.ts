import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { ColumnProps } from './column.props';
import { ColumnSize } from '@/logic/types/column';
import { getDisplay } from '../getDisplay';

export class ColumnClasses<T extends ColumnProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { narrow, offset, size } = parameters;
    return {
      ...getDisplay<boolean>(narrow, 'narrow', true),
      ...getDisplay<ColumnSize>(size),
      [`is-offset-${offset}`]: !!offset,
    };
  };
}
