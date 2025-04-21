import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import { JSX } from 'react';
import classNames from 'classnames';
import { ElementProps } from '@/logic/interfaces/props/element';
import { IntrinsicElementsNoSVG, PropsOf } from '@/logic/types/propsOf';

export const Element = <T extends AnyElement>({
  children,
  as,
  nameOf,
  key,
  className,
  ...props
}: PropsOf<T> & ElementProps): JSX.Element | undefined => {
  const Generic = (as ?? 'div') as keyof IntrinsicElementsNoSVG;
  return (
    <Generic className={classNames(className, nameOf)} key={key} {...props}>
      {children}
    </Generic>
  );
};
