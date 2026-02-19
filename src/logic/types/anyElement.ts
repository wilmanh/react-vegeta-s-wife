import { JSX } from 'react';
import { IntrinsicElementsNoSVG } from './propsOf';
export type AnyElement2 =
  | keyof IntrinsicElementsNoSVG
  | React.FunctionComponent<IntrinsicElementsNoSVG>
  | (new (props: IntrinsicElementsNoSVG) => React.Component);

export type ButtonElements = Pick<
  JSX.IntrinsicElements,
  'a' | 'button' | 'input'
>;

export type AnyElement = keyof IntrinsicElementsNoSVG & {};
// o más simple si no te importa filtrar SVG:
