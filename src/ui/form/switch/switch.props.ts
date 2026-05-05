import { Color } from '@/logic/interfaces/props/color';
import { IsRounded, Style } from '@/logic/interfaces/props/style';
import { Sizes } from '@/logic/types/sizes';

export interface SwitchProps
  extends Color, Pick<Style, 'outlined'>, Style, IsRounded {
  inputSize?: Sizes;
}
