import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { container } from 'tsyringe';
import { TabsProps } from './tabs.props';
import { SizeClassNameResolver } from '@/logic/classes/classNamesResolver/size/sizeClassNamesResolver';

export class TabsClasses<T extends TabsProps> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { size, position, boxed, toggle, rounded, fullwidth } = parameters;
    const sizeClass = container.resolve(SizeClassNameResolver);
    return {
      ...sizeClass.prepareClasses({ size }),
      [`is-boxed`]: boxed,
      [`is-toggle`]: toggle,
      [`is-fullwidth`]: fullwidth,
      [`is-toggle-rounded`]: rounded,
      [`is-${position}`]: position !== 'left' ? position : false,
    };
  };
}
