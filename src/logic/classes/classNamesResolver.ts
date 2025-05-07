import { GenericObject } from '../interfaces/genericObject';
import { isEmpty } from 'lodash';
import { Shape } from '../interfaces/props/shape';
import { Ratio } from '../interfaces/props/ratio';
import { TextColor } from '../interfaces/props/textColor';
import { Hoverable } from '../interfaces/props/hoverable';
import { Delete } from '../interfaces/props/delete';
import { TagsProps } from '@/ui/elements/tags/tags.props';
import { Grouped } from '../interfaces/props/grouped';
import { ClassNameFactory } from './classNameFactory';
import { HeadingProps } from '@/ui/elements/headings/heading.props';
import { State } from '../interfaces/props/state';
import { Style } from '../interfaces/props/style';
import { FullWidth } from '../interfaces/props/fullwidth';
import { Size } from '../interfaces/props/size';
import { Color } from '../interfaces/props/color';
import { Common } from '../interfaces/props/common';

export class ClassNameResolver<
  T extends Common &
    Color &
    Size &
    FullWidth &
    Style &
    State &
    Shape &
    Ratio &
    TextColor &
    Hoverable &
    Delete &
    TagsProps &
    Grouped &
    Omit<HeadingProps, 'as'>,
> implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    if (isEmpty(parameters)) {
      return {};
    }
    const {
      shape,
      active,
      color,
      grouped,
      multiline,
      hoverable,
      spaced,
      hSize,
      dark,
      focus,
      deleted,
      fullwidth,
      hover,
      textColor,
      inverted,
      light,
      addons,
      ratio,
      loading,
      outlined,
      rounded,
      size,
    } = parameters;
    const classes = {
      [`is-${color}`]: color,
      'is-dark': dark,
      'is-light': light,
      [`is-${shape}`]: shape,
      [`is-${hSize}`]: hSize,
      [`is-${ratio}`]: ratio,
      [`is-${size}`]: size,
      [`has-text-${textColor}`]: textColor,
      'is-grouped-multiline': multiline,
      'is-grouped': grouped,
      'is-spaced': spaced,
      'is-delete': deleted,
      'is-hoverable': hoverable,
      'has-addons': addons,
      'is-fullwidth': fullwidth,
      'is-loading': loading,
      'is-active': active,
      'is-focused': focus,
      'is-hovered': hover,
      'is-rounded': rounded,
      'is-inverted': inverted,
      'is-outlined': outlined,
    };
    return classes;
  };
}
