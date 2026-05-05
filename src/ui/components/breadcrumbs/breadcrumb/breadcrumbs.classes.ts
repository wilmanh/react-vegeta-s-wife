import { container } from 'tsyringe';

import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';

import { BreadcrumbProps } from './breadcrumb.props';

export class BreadcrumbClasses<
  T extends BreadcrumbProps,
> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { scale, position, separator } = parameters;
    const sizeClass = container.resolve(SizeClassNameResolver);
    return {
      ...sizeClass.prepareClasses({ scale }),
      [`is-${position}`]: position !== 'left' ? position : false,
      [`has-${separator}-separator`]: separator,
    };
  };
}
