import { HeadingSizes } from '@/logic/types/sizes';

export interface HeadingProps {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  hSize?: HeadingSizes;
  spaced?: boolean;
}
