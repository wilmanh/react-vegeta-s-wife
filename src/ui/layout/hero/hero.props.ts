import { Color } from '@/logic/interfaces/props/color';

export interface HeroProps extends Pick<Color, 'color'> {
  size?: 'fullheight' | 'halfheight' | 'small' | 'medium' | 'large';
  withNavbar?: boolean;
}
