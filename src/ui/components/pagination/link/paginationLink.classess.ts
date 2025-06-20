import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { PaginationLinkProps } from './paginationLink.props';

export class PaginationLinkClasses<T extends PaginationLinkProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { current } = parameters;
    return {
      ['is-current']: current,
    };
  };
}
