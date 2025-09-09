export const arrayFlexExpand = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  0,
  1,
  2,
  3,
  4,
  5,
] as const;

export const arrayFlexDirection = [
  'row',
  'row-reverse',
  'column-reverse',
  'column',
] as const;

export const arrayFlexWrap = ['nowrap', 'wrap-reverse', 'wrap'] as const;

export const arrayLeftRight = ['left', 'right'] as const;

export const arrayStartEnd = ['start', 'end'] as const;
export const arrayFlexStartEnd = ['flex-start', 'flex-end'] as const;

export const arrayJustifyContent = [
  'center',
  'space-between',
  'space-evenly',
] as const;

export const arrayAlignContent = [
  'space-around',
  'stretch',
  'baseline',
] as const;

export const arrayAlignItems = [
  'stretch',
  'baseline, self-start',
  'self-end',
] as const;
export const arrayAlignSelf = [
  'auto',
  'center',
  'baseline',
  'stretch',
] as const;

export type FlexDirection = (typeof arrayFlexDirection)[number];
export type FlexExpand = (typeof arrayFlexExpand)[number];

export type FlexWrap = (typeof arrayFlexWrap)[number];

export type JustifyContent =
  | (typeof arrayJustifyContent)[number]
  | (typeof arrayLeftRight)[number]
  | (typeof arrayFlexStartEnd)[number]
  | (typeof arrayStartEnd)[number];

export type AlignContent =
  | (typeof arrayJustifyContent)[number]
  | (typeof arrayLeftRight)[number]
  | (typeof arrayAlignContent)[number]
  | (typeof arrayFlexStartEnd)[number]
  | (typeof arrayStartEnd)[number];

export type AlignItems =
  | (typeof arrayFlexStartEnd)[number]
  | (typeof arrayAlignItems)[number]
  | (typeof arrayStartEnd)[number];

export type AlignSelf =
  | (typeof arrayFlexStartEnd)[number]
  | (typeof arrayAlignSelf)[number];

export interface FlexboxHelperProps {
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: AlignContent;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  grow?: FlexExpand;
  shrink?: FlexExpand;
}
