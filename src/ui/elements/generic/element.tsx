import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import { JSX } from 'react';
import classNames from 'classnames';
import { ElementProps } from '@/logic/interfaces/props/element';
import { IntrinsicElementsNoSVG, PropsOf } from '@/logic/types/propsOf';

/**
 * A generic component that renders an HTML element based on either the "as"
 * property, which specifies the type of the element, or the "nameOf" property,
 * which is used as the className of the element.
 *
 * @param props The props object, which must contain either the "as" or the
 * "nameOf" property.
 * @param children The children of the element.
 * @param as The type of the element to render.
 * @param nameOf The class name of the element to render.
 * @param key The key of the element.
 * @param className The class name of the element.
 * @returns The rendered element, or undefined if either "as" or "nameOf" are
 * undefined.
 */
export const Element = <T extends AnyElement>({
  children,
  as,
  nameOf,
  key,
  className,
  ...props
}: PropsOf<T> & ElementProps): JSX.Element => {
  if (!as && !nameOf) {
    throw new Error('Element requires either "as" or "nameOf" property');
  }

  const Generic = (as ?? 'div') as keyof IntrinsicElementsNoSVG;
  if (!Generic) {
    throw new Error(`Element: Unknown "as" property value: ${as}`);
  }

  return (
    <Generic className={classNames(className, nameOf)} key={key} {...props}>
      {children}
    </Generic>
  ) as JSX.Element;
};
