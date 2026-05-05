import { JSX } from 'react';
import { IntrinsicElementsNoSVG } from './propsOf';
export type AnyElement =
  | keyof IntrinsicElementsNoSVG
  | React.FunctionComponent<IntrinsicElementsNoSVG>
  | (new (props: IntrinsicElementsNoSVG) => React.Component);

export type ButtonElements = Pick<
  JSX.IntrinsicElements,
  'a' | 'button' | 'input'
>;
