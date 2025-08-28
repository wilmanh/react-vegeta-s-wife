import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { HeroProps } from './hero.props';
import { container } from 'tsyringe';
import { ColorClassNameResolver } from '@/logic/classes/classNamesResolver/colorClassNamesResolver';

export class HeroClasses<T extends HeroProps> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const { color, size, withNavbar } = parameters;
    const colorClasses = container.resolve(ColorClassNameResolver);
    return {
      ...colorClasses.prepareClasses({
        color,
      }),
      [`is-${size}`]: size,
      ['is-fullheight-with-navbar']: withNavbar,
    };
  };
}
