import { JSX } from 'react';
import { State } from '@/logic/interfaces/props/state';

export interface TabsTabProps extends Omit<State, 'focus' | 'hover'> {
  anchorProps?: JSX.IntrinsicElements['a'];
  active?: boolean;
}
