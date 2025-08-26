import { ColumnSize } from '@/logic/types/column';
import { Display } from '@/logic/types/display';

export interface ColumnProps {
  offset?: ColumnSize;
  size?: ColumnSize | Display<ColumnSize>;
  narrow?: boolean | Display<boolean>;
}
