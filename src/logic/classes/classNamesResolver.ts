import { GenericObject } from '../interfaces/genericObject';
import { isEmpty } from 'lodash';
import { JointedProps } from '../interfaces/props/jointed';
import { Shape } from '../interfaces/props/shape';
import { Ratio } from '../interfaces/props/ratio';
import { TextColor } from '../interfaces/props/textColor';
import { Hoverable } from '../interfaces/props/hoverable';
import { Delete } from '../interfaces/props/delete';
import { TagsProps } from '@/ui/elements/tags/tags.props';
import { Grouped } from '../interfaces/props/grouped';
import { HeadingProps } from '@/ui/elements/heading/heading.props';

interface IClassNameResolver<T> {
  getClasses: (parameters: T) => GenericObject;
}

export class ClassNameResolver<
  T extends JointedProps &
    Shape &
    Ratio &
    TextColor &
    Hoverable &
    Delete &
    TagsProps &
    Grouped &
    Omit<HeadingProps, 'as'>,
> implements IClassNameResolver<T>
{
  getClasses: (parameters: T) => GenericObject = (parameters) => {
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
      [`is-${shape}`]: shape,
      [`is-${hSize}`]: hSize,
      [`is-${ratio}`]: ratio,
      [`is-${size}`]: size,
      [`has-text-${textColor}`]: textColor,
      'is-grouped-multiline': multiline,
      'is-dark': dark,
      'is-spaced': spaced,
      'is-delete': deleted,
      'is-hoverable': hoverable,
      'has-addons': addons,
      'is-light': light,
      'is-grouped': grouped,
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
