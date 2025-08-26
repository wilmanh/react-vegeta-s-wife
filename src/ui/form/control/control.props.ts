import { Grouped } from '@/logic/interfaces/props/grouped';

export interface ControlProps extends Omit<Grouped, 'grouped'> {
  iconLeft?: boolean;
  iconRight?: boolean;
  expanded?: boolean;
  grouped?: 'left' | 'right' | 'centered';
}
