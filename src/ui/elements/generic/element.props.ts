import { AsElementType } from '@/logic/interfaces/props/elementType';
import { Helpers } from '@/logic/interfaces/props/helpers';
import { NameOf } from '@/logic/interfaces/props/nameOf';
import { PropsWithChildren } from 'react';

export interface ComponentProps
  extends AsElementType, NameOf, PropsWithChildren, Helpers {
  // htmlProps?: Omit<T, 'children | key | className'>;
  className?: string;
  key?: string;
}

export type ElementProps<T> = Omit<T, 'children' | 'key' | 'className'> &
  ComponentProps;
