import { Grouped } from '@/logic/interfaces/props/grouped';
import { Gap } from '@/logic/types/column';
import { Display } from '@/logic/types/display';

export interface ColumnsProps extends Pick<Grouped, 'multiline'> {
  responsive?: 'mobile' | 'desktop' | 'tablet' | 'widescreen' | 'fullhd';
  gapless?: boolean;
  center?: boolean;
  vCenter?: boolean;
  gap?: Gap | Display<Gap>;
}
