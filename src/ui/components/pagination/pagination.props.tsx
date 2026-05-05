import { Size } from '@/logic/interfaces/props/size';
import { IsRounded } from '@/logic/interfaces/props/style';

export interface PaginationProps extends IsRounded, Size {
  position?: 'centered' | 'left' | 'right';
}
