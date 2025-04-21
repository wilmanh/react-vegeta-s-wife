import { Color } from '@/logic/interfaces/props/color';
import { Size } from '@/logic/interfaces/props/size';
import { PropsWithChildren } from 'react';

export type ProgressProps = Color & Size & PropsWithChildren;
