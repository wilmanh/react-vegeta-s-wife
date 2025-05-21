import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { SizeClassNameResolver } from '@/logic/classes/classNamesResolver/sizeClassNamesResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { container } from 'tsyringe';
import { BreadcrumbProps } from './breadcrumb.props';

export class BreadcrumbClasses<T extends BreadcrumbProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { size, position, separator } = parameters;
    const sizeClass = container.resolve(SizeClassNameResolver);
    return {
      ...sizeClass.prepareClasses({ size }),
      [`is-${position}`]: position !== 'left' ? position : false,
      [`has-${separator}-separator`]: separator,
    };
  };
}
