import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { HeadingProps } from '../heading.props';
import { Element } from '../../generic/element';
import { ElementProps } from '../../generic/element.props';
import { HeadingClassNameResolver } from '@/logic/classes/classNamesResolver/heading/headingClassNamesResolver';

export const Subtitle = ({
  className,
  children,
  spaced,
  hSize,
  as,
  ...props
}: ElementProps<
  | JSX.IntrinsicElements['p']
  | JSX.IntrinsicElements['h1']
  | JSX.IntrinsicElements['h2']
  | JSX.IntrinsicElements['h3']
  | JSX.IntrinsicElements['h4']
  | JSX.IntrinsicElements['h5']
  | JSX.IntrinsicElements['h6']
> &
  HeadingProps): JSX.Element => {
  const classesResolver = container.resolve(HeadingClassNameResolver);
  const tagClasses = classesResolver.prepareClasses({
    spaced,
    hSize,
  });
  const asDefault = as ?? 'p';

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
