import { Size } from '@/logic/interfaces/props/size';
import { ReactNode } from 'react';

export interface HorizontalFieldProps extends Size {
  label: ReactNode;
  body: ReactNode;
}
