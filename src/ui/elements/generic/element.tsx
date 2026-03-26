import 'reflect-metadata';
import { AnyElement } from '@/logic/types/anyElement';
import classNames from 'classnames';
import { IntrinsicElementsNoSVG } from '@/logic/types/propsOf';
import { ElementProps } from './element.props';
import { container } from 'tsyringe';
import { ElementClasses } from './element.classes';

export const Element = <
  T extends React.ComponentType<ElementProps<AnyElement>>,
>({
  as,
  key,
  nameOf,
  children,
  className,
  backgroundColor,
  backgroundShade,
  textColor,
  backgroundInverted,
  textInverted,
  textShade,
  extra,
  flexbox,
  spacing,
  typography,
  visibility,
  ...props
}: ElementProps<T>) => {
  if (!as && !nameOf) {
    throw new Error('Element requires either "as" or "nameOf" property');
  }
  const Generic = (as ?? 'div') as keyof IntrinsicElementsNoSVG;
  if (!Generic) {
    throw new Error(`Element: Unknown "as" property value: ${as}`);
  }
  const elementClasses = container.resolve(ElementClasses);
  return (
    <Generic
      className={classNames(
        elementClasses.prepareClasses({
          backgroundColor,
          backgroundShade,
          textColor,
          backgroundInverted,
          textInverted,
          textShade,
          flexbox,
          spacing,
          visibility,
          typography,
          extra,
        }),
        className,
        nameOf,
      )}
      key={key}
      {...props}
    >
      {children}
    </Generic>
  );
};
