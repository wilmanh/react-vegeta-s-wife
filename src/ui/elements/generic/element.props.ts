import { AsElementType } from '@/logic/interfaces/props/elementType';
import { NameOf } from '@/logic/interfaces/props/nameOf';
import { PropsWithChildren } from 'react';

export interface ElementProps<T>
  extends AsElementType,
    NameOf,
    PropsWithChildren {
  htmlProps?: Omit<T, 'children | key | className'>;
  className?: string;
  key?: string;
}
