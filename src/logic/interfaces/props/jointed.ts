import { Common } from './common';
import { Color } from './color';
import { Style } from './style';
import { State } from './state';
import { Size } from './size';
import { FullWidth } from './fullwidth';

export type JointedProps = Common & Color & Size & FullWidth & Style & State;
