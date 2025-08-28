import { Display } from '@/logic/types/display';
import { FlexGridSize } from '../common';

export interface FixedGridProps {
  columns?: FlexGridSize | Display<FlexGridSize>;
  autoCount?: boolean;
}
