import { ReactNode } from 'react';

import { Color } from '@/logic/interfaces/props/color';
import { FullWidth } from '@/logic/interfaces/props/fullwidth';
import { Sizes } from '@/logic/types/sizes';

export interface FileProps extends FullWidth, Color {
  label?: ReactNode;
  icon?: ReactNode;
  name?: string;
  centered?: boolean;
  right?: boolean;
  boxed?: boolean;
  inputSize?: Sizes;
}
