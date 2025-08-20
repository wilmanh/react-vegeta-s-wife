import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { SizeClassNameResolver } from '@/logic/classes/classNamesResolver/sizeClassNamesResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { container } from 'tsyringe';
import { FileProps } from './file.props';
import { FullwidthClassNameResolver } from '@/logic/classes/classNamesResolver/fullwidthClassNamesResolver';
import { ColorClassNameResolver } from '@/logic/classes/classNamesResolver/colorClassNamesResolver';

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
      size,
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
      ...sizeClass.prepareClasses({ size }),
      ...colorClass.prepareClasses({
        color,
        dark,
        light,
      }),
    };
  };
}
