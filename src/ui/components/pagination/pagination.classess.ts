import { container } from 'tsyringe';

import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { RoundedClassNameResolver } from '@/logic/classes/classNameResolver/rounded/roundedClassNameResolver';
import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';

import { PaginationProps } from './pagination.props';

export class PaginationClasses<
  T extends PaginationProps,
> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { position, isRounded, size } = parameters;
    const sizeClass = container.resolve(SizeClassNameResolver);

    const roundedResolver = container.resolve(RoundedClassNameResolver);

    return {
      [`is-centered`]: position === 'centered',
      [`is-right`]: position === 'right',
      ...sizeClass.prepareClasses({ size }),
      ...roundedResolver.prepareClasses({ isRounded }),
    };
  };
}
