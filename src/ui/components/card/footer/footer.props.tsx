import { ReactNode } from 'react';

export interface CardFooterProps {
  items: { value: ReactNode; id?: string; href?: string }[];
}
