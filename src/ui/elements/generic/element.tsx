import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import { JSX } from 'react';
import classNames from 'classnames';
import { IntrinsicElementsNoSVG } from '@/logic/types/propsOf';
import { ElementProps } from './element.props';

export const Element = <T extends AnyElement>({
  as,
  key,
  nameOf,
  children,
  className,
  htmlProps,
  ...props
}: ElementProps<T>): JSX.Element => {
  if (!as && !nameOf) {
    throw new Error('Element requires either "as" or "nameOf" property');
  }
  const Generic = (as ?? 'div') as keyof IntrinsicElementsNoSVG;
  if (!Generic) {
    throw new Error(`Element: Unknown "as" property value: ${as}`);
  }
  return (
    <Generic
      className={classNames(className, nameOf)}
      key={key}
      {...htmlProps}
      {...props}
    >
      {children}
    </Generic>
  ) as JSX.Element;
};
