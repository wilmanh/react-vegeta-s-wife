import { Color } from '@/logic/interfaces/props/color';
import { ElementProps } from '@/logic/interfaces/props/element';

export interface NotificationProps extends ElementProps, Color {
    onClose?: () => void;
}
