import { Size } from '@/logic/interfaces/props/size';

export interface BreadcrumbProps extends Size {
  position?: 'left' | 'centered' | 'right';
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
}
