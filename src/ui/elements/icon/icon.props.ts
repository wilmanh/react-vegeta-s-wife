import { Size } from '@/logic/interfaces/props/size';
import { TextColor } from '@/logic/interfaces/props/textColor';

export interface IconProps extends TextColor, Size {
  text?: boolean;
  right?: boolean;
  left?: boolean;
}
