import { JSX } from 'react';
import { IntrinsicElementsNoSVG } from './propsOf';
export type AnyElement =
  | keyof IntrinsicElementsNoSVG
  | React.FunctionComponent<never>
  | (new (props: never) => React.Component);

export type ButtonElements = Pick<
  JSX.IntrinsicElements,
  'a' | 'button' | 'input'
>;
