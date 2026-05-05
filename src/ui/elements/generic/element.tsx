import classNames from 'classnames';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { splitHelperElementProps } from '@/logic/functions/splitHelperProps';
import { AnyElement } from '@/logic/types/anyElement';
import { IntrinsicElementsNoSVG } from '@/logic/types/propsOf';

import { ElementClasses } from './element.classes';
import { ElementProps } from './element.props';

export const Element = <
  T extends React.ComponentType<ElementProps<AnyElement>>,
>({
  as,
  key,
  nameOf,
  children,
  className,
  ...rest
}: ElementProps<T>) => {
  if (!as && !nameOf) {
    throw new Error('Element requires either "as" or "nameOf" property');
  }
  const Generic = (as ?? 'div') as keyof IntrinsicElementsNoSVG;
  if (!Generic) {
    throw new Error(`Element: Unknown "as" property value: ${as}`);
  }

  const { domProps, helperProps } = splitHelperElementProps(rest);

  const elementClasses = container.resolve(ElementClasses);
  return (
    <Generic
      className={classNames(
        elementClasses.prepareClasses(helperProps),
        className,
        nameOf,
      )}
      key={key}
      {...domProps}
    >
      {children}
    </Generic>
  );
};
