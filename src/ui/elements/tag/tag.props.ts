import { Color } from '@/logic/interfaces/props/color';
import { Delete } from '@/logic/interfaces/props/delete';
import { Size } from '@/logic/interfaces/props/size';
import { Rounded } from '@/logic/interfaces/props/style';

export interface TagProps extends Color, Size, Rounded, Delete {
  as?: 'span' | 'div' | 'a' | 'button';
  hoverable?: boolean;
}
