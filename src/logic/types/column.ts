export type ColumnSize = ColumnsText & Gap & Size;

type ColumnsText =
  | 'three-quarters'
  | 'two-thirds'
  | 'half'
  | 'one-third'
  | 'one-quarter'
  | 'full'
  | 'four-fifths'
  | 'three-fifths'
  | 'two-fifths'
  | 'one-fifth';

export type Gap = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
type Size = '9' | '10' | '11' | '12';
