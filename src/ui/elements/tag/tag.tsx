import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Element as E } from '../generic/element';
import { ElementProps } from '../generic/element.props';
import { TagTags } from '../tags/tags.type';
import { TagClasses } from './tag.classes';
import { TagProps } from './tag.props';

export const Tag = ({
  hoverable,
  className,
  children,
  rounded,
  deleted,
  color,
  light,
  size,
  dark,
  as,
  ...props
}: ElementProps<TagTags> & TagProps): JSX.Element => {
  const classesResolver = container.resolve(TagClasses);
  const tagClasses = classesResolver.prepareClasses({
    hoverable,
    rounded,
    color,
    light,
    deleted,
    dark,
    size,
  });
  const asDefault = as ?? 'span';
  const Element = E as React.ComponentType<ElementProps<TagTags>>;
  return (
    <Element
      className={classNames(className, tagClasses)}
      as={asDefault}
      nameOf={'tag'}
      {...props}
    >
      {children}
    </Element>
  );
};
