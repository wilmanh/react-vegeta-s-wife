import { PropsWithChildren } from 'react';
import { AsElementType } from './elementType';
import { NameOf } from './nameOf';

export type ElementProps = AsElementType & NameOf & PropsWithChildren;
