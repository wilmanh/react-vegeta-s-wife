import { Color } from '@/logic/interfaces/props/color';

export interface NavbarProps extends Color {
  transparent?: boolean;
  fixed?: 'top' | 'bottom';
  spaced?: boolean;
  shadow?: boolean;
}
