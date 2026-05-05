import { Color } from './color';
import { Size } from './size';
import { State } from './state';
import { Rounded } from './style';

export interface Input extends Color, Size, Rounded, Omit<State, 'active'> {
  static?: boolean;
  fixed?: boolean;
}
