import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { PaginationProps } from './pagination.props';
import { container } from 'tsyringe';
import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';
import { RoundedClassNameResolver } from '@/logic/classes/classNameResolver/rounded/roundedClassNameResolver';

export class PagintaionClasses<T extends PaginationProps>
  implements ClassNameFactory<T>
{
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
