import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { TagsProps } from './tags.props';
import { Element as E } from '../generic/element';
import { TagsClasses } from './tags.classes';
import { ElementProps } from '../generic/element.props';
import { TagTags } from './tags.type';

export const Tags = ({
  className,
  children,
  addons,
  ...props
}: ElementProps<TagTags> & TagsProps): JSX.Element => {
  const classesResolver = container.resolve(TagsClasses);
  const tagClasses = classesResolver.prepareClasses({ addons });
  const Element = E as React.ComponentType<ElementProps<TagTags>>;
  return (
    <Element
      className={classNames(className, tagClasses)}
      as={'div'}
      nameOf={'tags'}
      {...props}
    >
      {children}
    </Element>
  );
};
