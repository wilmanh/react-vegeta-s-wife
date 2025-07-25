import { Size } from './size';
import { State } from './state';
import { Color } from './color';

export interface Input extends Color, Size, Omit<State, 'active'> {
  static?: boolean;
  fixed?: boolean;
}
