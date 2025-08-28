import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { ContainerProps } from './container.props';
import { container } from 'tsyringe';
import { ContainerClasses } from './container.classes';
const Container = ({
  widescreen,
  fullhd,
  max,
  fluid,
  children,
  className,
  ...props
}: JSX.IntrinsicElements['div'] &
  ContainerProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const containerClasses = container.resolve(ContainerClasses);
  return (
    <Element
      className={classNames(
        className,
        containerClasses.prepareClasses({ widescreen, fullhd, max, fluid }),
      )}
      nameOf='container'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Container;
