import { Size } from '@/logic/interfaces/props/size';

export interface TabsProps extends Size {
  position?: 'left' | 'centered' | 'right';
  boxed?: boolean;
  toggle?: boolean;
  rounded?: boolean;
  fullwidth?: boolean;
}
