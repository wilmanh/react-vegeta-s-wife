import { FlexGridSize } from '../common';

export interface CellProps {
  colStart?: FlexGridSize;
  colEnd?: FlexGridSize;
  colSpan?: FlexGridSize;
  rowStart?: FlexGridSize;
  rowEnd?: FlexGridSize;
  rowSpan?: FlexGridSize;
}
