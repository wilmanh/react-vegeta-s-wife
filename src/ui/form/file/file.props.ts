import { Color } from '@/logic/interfaces/props/color';
import { FullWidth } from '@/logic/interfaces/props/fullwidth';
import { Size } from '@/logic/interfaces/props/size';
import { ReactNode } from 'react';

export interface FileProps extends FullWidth, Color, Size {
  label?: ReactNode;
  icon?: ReactNode;
  name?: string;
  centered?: boolean;
  right?: boolean;
  boxed?: boolean;
}
