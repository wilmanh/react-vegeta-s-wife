import { Gap } from '@/logic/types/column';
import { SmartGridSize } from '../common';

export interface SmartGridProps {
  columnSize?: SmartGridSize;
  gap?: Gap;
  rowGap?: Gap;
  columnGap?: Gap;
}
