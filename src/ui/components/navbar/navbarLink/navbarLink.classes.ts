import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { NavbarLinkProps } from './navbarLink.props';

export class NavbarLinkClasses<T extends NavbarLinkProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { arrowless } = parameters;
    return {
      ['is-arrowless']: arrowless,
    };
  };
}
