import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { TagProps } from './tag.props';
import { TagClasses } from './tag.classes';
import { ElementProps } from '../generic/element.props';
import { Element as E } from '../generic/element';
import { TagTags } from '../tags/tags.type';

export const Tag = ({
  hoverable,
  className,
  children,
  rounded,
  deleted,
  color,
  light,
  scale,
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
    scale,
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
