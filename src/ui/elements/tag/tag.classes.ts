import { container } from 'tsyringe';

import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { ColorClassNameResolver } from '@/logic/classes/classNameResolver/color/colorClassNameResolver';
import { DeleteClassNameResolver } from '@/logic/classes/classNameResolver/delete/deleteClassNameResolver';
import { HoverableClassNameResolver } from '@/logic/classes/classNameResolver/hoverable/hoverableClassNameResolver';
import { RoundedClassNameResolver } from '@/logic/classes/classNameResolver/rounded/roundedClassNameResolver';
import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { Color } from '@/logic/interfaces/props/color';
import { Delete } from '@/logic/interfaces/props/delete';
import { Hoverable } from '@/logic/interfaces/props/hoverable';
import { Size } from '@/logic/interfaces/props/size';
import { Rounded } from '@/logic/interfaces/props/style';

export class TagClasses<
  T extends Color & Size & Rounded & Delete & Hoverable,
> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const colorClass = container.resolve(ColorClassNameResolver);
    const sizeClass = container.resolve(SizeClassNameResolver);
    const roundedClass = container.resolve(RoundedClassNameResolver);
    const hoverClass = container.resolve(HoverableClassNameResolver);
    const deleteClass = container.resolve(DeleteClassNameResolver);
    return {
      ...colorClass.prepareClasses({
        color: parameters?.color,
        dark: parameters?.dark,
        light: parameters?.light,
      }),
      ...hoverClass.prepareClasses({ hoverable: parameters?.hoverable }),
      ...deleteClass.prepareClasses({ deleted: parameters?.deleted }),
      ...sizeClass.prepareClasses({ size: parameters?.size }),
      ...roundedClass.prepareClasses({ rounded: parameters?.rounded }),
    };
  };
}
