import { Display } from '@/logic/types/display';

export const arrayShow = [
    'block',
    'flex',
    'inline',
    'inline-block',
    'inline-flex',
] as const;

export type VisibiltyShow = (typeof arrayShow)[number];

export interface VisibilityHelperProps {
    invisible?: boolean;
    hidden?: boolean | Display<boolean>;
    onlyScreenReader?: boolean;
    show?: VisibiltyShow | Display<VisibiltyShow>;
}
