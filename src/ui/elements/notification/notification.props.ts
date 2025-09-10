import { Color } from '@/logic/interfaces/props/color';

export interface NotificationProps extends Color {
  onClose?: () => void;
}
