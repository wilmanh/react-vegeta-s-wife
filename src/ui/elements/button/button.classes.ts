import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { ColorClassNameResolver } from '@/logic/classes/classNamesResolver/color/colorClassNamesResolver';
import { CommonClassNameResolver } from '@/logic/classes/classNamesResolver/common/commonClassNamesResolver';
import { FullwidthClassNameResolver } from '@/logic/classes/classNamesResolver/fullwidth/fullwidthClassNamesResolver';
import { SizeClassNameResolver } from '@/logic/classes/classNamesResolver/size/sizeClassNamesResolver';
import { StateClassNameResolver } from '@/logic/classes/classNamesResolver/state/stateClassNamesResolver';
import { StyleClassNameResolver } from '@/logic/classes/classNamesResolver/style/styleClassNamesResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { Color } from '@/logic/interfaces/props/color';
import { Common } from '@/logic/interfaces/props/common';
import { FullWidth } from '@/logic/interfaces/props/fullwidth';
import { Size } from '@/logic/interfaces/props/size';
import { State } from '@/logic/interfaces/props/state';
import { Style } from '@/logic/interfaces/props/style';
import { container } from 'tsyringe';

export class ButtonClasses<
  T extends Common & Color & Size & FullWidth & Style & State,
> implements ClassNameFactory<T>
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
