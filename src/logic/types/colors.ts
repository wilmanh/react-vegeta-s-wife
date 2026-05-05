export const ArrayOfWhiteAndBlack = [
  'white',
  'black',
  'text',
  'ghost',
] as const;

export const ArrayOfOnlyColors = [
  'primary',
  'link',
  'info',
  'success',
  'warning',
  'danger',
] as const;

export const ArrayOfColors = [
  ...ArrayOfOnlyColors,
  ...ArrayOfWhiteAndBlack,
] as const;

export type WhiteAndBlack = (typeof ArrayOfWhiteAndBlack)[number];
export type OnlyColors = (typeof ArrayOfOnlyColors)[number];
export type Colors = WhiteAndBlack | OnlyColors;
