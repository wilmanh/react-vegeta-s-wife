import { Ratio } from '@/logic/interfaces/props/ratio';
import { Shape } from '@/logic/interfaces/props/shape';

export interface ImageProps extends Shape, Ratio {
    isRounded?: boolean;
    width?: string;
}
