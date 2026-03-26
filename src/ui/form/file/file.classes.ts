import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { container } from 'tsyringe';
import { FileProps } from './file.props';
import { FullwidthClassNameResolver } from '@/logic/classes/classNameResolver/fullwidth/fullwidthClassNameResolver';
import { ColorClassNameResolver } from '@/logic/classes/classNameResolver/color/colorClassNameResolver';
import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';

export class FileClasses<T extends FileProps> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const {
      name,
      right,
      centered,
      boxed,
      fullwidth,
      color,
      dark,
      light,
      scale,
    } = parameters;
    const fullWidthClass = container.resolve(FullwidthClassNameResolver);
    const colorClass = container.resolve(ColorClassNameResolver);
    const sizeClass = container.resolve(SizeClassNameResolver);

    return {
      [`has-name`]: name,
      [`is-right`]: right,
      [`is-centered`]: centered,
      ['is-boxed']: boxed,
      ...fullWidthClass.prepareClasses({ fullwidth: fullwidth }),
      ...sizeClass.prepareClasses({ scale }),
      ...colorClass.prepareClasses({
        color,
        dark,
        light,
      }),
    };
  };
}
