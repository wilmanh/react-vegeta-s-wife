import { Display } from '@/logic/types/display';

export const arrayTypographySize = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  0,
  1,
  2,
  3,
  4,
  5,
  6,
] as const;

export const arrayTextAlignment = [
  'centered',
  'justified',
  'left',
  'right',
] as const;

export const arrayTextTransformation = [
  'capitalized',
  'lowercase',
  'uppercase',
  'italic',
  'underlined',
] as const;

export const arrayTextWeight = [
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
] as const;
export const arrayFontFamily = [
  'sans-serif',
  'monospace',
  'primary',
  'secondary',
  'code',
] as const;

export type TypographySize = (typeof arrayTypographySize)[number];
export type TextAlignment = (typeof arrayTextAlignment)[number];
export type TextTransformation = (typeof arrayTextTransformation)[number];
export type TextWeight = (typeof arrayTextWeight)[number];
export type FontFamily = (typeof arrayFontFamily)[number];

export interface TypographyHelperProps {
  fontSize?: TypographySize | Display<TypographySize>;
  textAlignment?: TextAlignment | Display<TextAlignment>;
  textTransformation?: TextTransformation;
  textWeight?: TextWeight;
  fontFamily?: FontFamily;
}
