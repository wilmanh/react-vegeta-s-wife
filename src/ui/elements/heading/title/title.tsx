import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import { ClassNameResolver } from '@/logic/classes/classNamesResolver';
import classNames from 'classnames';
import { HeadingProps } from '../heading.props';
import { Element } from '../../generic/element';

export const Title = ({
  className,
  children,
  spaced,
  hSize,
  as,
  ...props
}: (
  | JSX.IntrinsicElements['p']
  | JSX.IntrinsicElements['h1']
  | JSX.IntrinsicElements['h2']
  | JSX.IntrinsicElements['h3']
  | JSX.IntrinsicElements['h4']
  | JSX.IntrinsicElements['h5']
  | JSX.IntrinsicElements['h6']
) &
  HeadingProps): JSX.Element => {
  const classesResolver = container.resolve(ClassNameResolver);
  const tagClasses = classesResolver.getClasses({
    spaced,
    hSize,
  });
  const asDefault = as ?? 'p';

  return (
    <Element
      className={classNames(className, tagClasses)}
      as={asDefault}
      nameOf={'title'}
      {...props}
    >
      {children}
    </Element>
  );
};
