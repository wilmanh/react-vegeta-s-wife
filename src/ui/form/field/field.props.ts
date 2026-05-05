import { Grouped } from '@/logic/interfaces/props/grouped';

export interface FieldProps extends Grouped {
  addons?: boolean;
  position?: 'left' | 'centered' | 'right';
}
