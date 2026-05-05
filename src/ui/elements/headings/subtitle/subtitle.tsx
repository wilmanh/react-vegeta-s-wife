import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { HeadingClassNameResolver } from '@/logic/classes/classNameResolver/heading/headingClassNameResolver';

import { Element as E } from '../../generic/element';
import { ElementProps } from '../../generic/element.props';
import { HeadingProps } from '../heading.props';
import { HeadingTags } from '../heading.type';

export const Subtitle = ({
  className,
  children,
  spaced,
  hSize,
  as,
  ...props
}: ElementProps<HeadingTags> & HeadingProps): JSX.Element => {
  const classesResolver = container.resolve(HeadingClassNameResolver);
  const tagClasses = classesResolver.prepareClasses({
    spaced,
    hSize,
  });
  const asDefault = as ?? 'p';
  const Element = E as React.ComponentType<ElementProps<HeadingTags>>;
  return (
    <Element
      className={classNames(className, tagClasses)}
      as={asDefault}
      nameOf={'subtitle'}
      {...props}
    >
      {children}
    </Element>
  );
};
