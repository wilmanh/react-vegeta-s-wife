import { Common } from '@/logic/interfaces/props/common';
import { ButtonType } from './buttonType';
import { State } from '@/logic/interfaces/props/state';
import { Style } from '@/logic/interfaces/props/style';
import { FullWidth } from '@/logic/interfaces/props/fullwidth';
import { Size } from '@/logic/interfaces/props/size';
import { Color } from '@/logic/interfaces/props/color';

export interface ButtonProps
  extends Common,
    Color,
    Size,
    FullWidth,
    Style,
    State {
  as?: Omit<ButtonType, 'input'>;
  noResponsive?: boolean;
}
