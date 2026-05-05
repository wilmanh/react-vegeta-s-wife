import { container } from 'tsyringe';

import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { ColorClassNameResolver } from '@/logic/classes/classNameResolver/color/colorClassNameResolver';
import { CommonClassNameResolver } from '@/logic/classes/classNameResolver/common/commonClassNameResolver';
import { FullwidthClassNameResolver } from '@/logic/classes/classNameResolver/fullwidth/fullwidthClassNameResolver';
import { SizeClassNameResolver } from '@/logic/classes/classNameResolver/size/sizeClassNameResolver';
import { StateClassNameResolver } from '@/logic/classes/classNameResolver/state/stateClassNameResolver';
import { StyleClassNameResolver } from '@/logic/classes/classNameResolver/style/styleClassNameResolver';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { Color } from '@/logic/interfaces/props/color';
import { Common } from '@/logic/interfaces/props/common';
import { FullWidth } from '@/logic/interfaces/props/fullwidth';
import { Size } from '@/logic/interfaces/props/size';
import { State } from '@/logic/interfaces/props/state';
import { Style } from '@/logic/interfaces/props/style';

export class ButtonClasses<
  T extends Common & Color & Size & FullWidth & Style & State,
> implements ClassNameFactory<T> {
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
