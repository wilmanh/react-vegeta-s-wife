import { JSX } from 'react';

export type TagTags = JSX.IntrinsicElements['span'] &
  JSX.IntrinsicElements['a'] &
  JSX.IntrinsicElements['div'] &
  JSX.IntrinsicElements['button'];
