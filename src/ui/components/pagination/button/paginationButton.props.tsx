import { Common } from '@/logic/interfaces/props/common';

export interface PaginationButtonProps extends Omit<Common, 'loading'> {
  type: 'previous' | 'next';
}
