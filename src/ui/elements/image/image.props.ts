import { Ratio } from '@/logic/interfaces/props/ratio';
import { Shape } from '@/logic/interfaces/props/shape';
import { IsRounded } from '@/logic/interfaces/props/style';

export interface ImageProps extends Shape, Ratio, IsRounded {
  width?: string;
}
