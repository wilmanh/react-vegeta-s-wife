import { HTMLElementType, JSX } from 'react';
export type IntrinsicElementsNoSVG = Omit<
  Pick<JSX.IntrinsicElements, HTMLElementType>,
  'object'
>;

export type PropsOf<Tag> = Tag extends keyof IntrinsicElementsNoSVG
  ? IntrinsicElementsNoSVG[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never;
