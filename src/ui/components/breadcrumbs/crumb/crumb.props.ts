import { State } from '@/logic/interfaces/props/state';

export interface CrumbProps extends Omit<State, 'focus' | 'hover'> {
  href?: string;
}
