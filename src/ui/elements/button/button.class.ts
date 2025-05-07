import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { ColorClassNameResolver } from '@/logic/classes/classNamesResolver/colorClassNamesResolver';
import { CommonClassNameResolver } from '@/logic/classes/classNamesResolver/commonClassNamesResolver';
import { FullwidthClassNameResolver } from '@/logic/classes/classNamesResolver/fullwidthClassNamesResolver';
import { SizeClassNameResolver } from '@/logic/classes/classNamesResolver/sizeClassNamesResolver';
import { StateClassNameResolver } from '@/logic/classes/classNamesResolver/stateClassNamesResolver';
import { StyleClassNameResolver } from '@/logic/classes/classNamesResolver/styleClassNamesResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { JointedProps } from '@/logic/interfaces/props/jointed';
import { container } from 'tsyringe';

export class ButtonClassNameResolver<T extends JointedProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const commonClass = container.resolve(CommonClassNameResolver);
    const colorClass = container.resolve(ColorClassNameResolver);
    const sizeClass = container.resolve(SizeClassNameResolver);
    const fullWidthClass = container.resolve(FullwidthClassNameResolver);
    const styleClass = container.resolve(StyleClassNameResolver);
    const stateClass = container.resolve(StateClassNameResolver);

    return {
      ...commonClass.prepareClasses({ loading: parameters?.loading }),
      ...sizeClass.prepareClasses({ size: parameters?.size }),
      ...colorClass.prepareClasses({
        color: parameters?.color,
        dark: parameters?.dark,
        light: parameters?.light,
      }),
      ...fullWidthClass.prepareClasses({ fullwidth: parameters?.fullwidth }),
      ...stateClass.prepareClasses({
        active: parameters?.active,
        focus: parameters?.focus,
        hover: parameters?.hover,
      }),
      ...styleClass.prepareClasses({
        inverted: parameters?.inverted,
        outlined: parameters?.outlined,
        rounded: parameters?.rounded,
      }),
    };
  };
}
