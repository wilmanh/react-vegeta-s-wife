import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { Color } from '@/logic/interfaces/props/color';
import { ColorClassNameResolver } from '@/logic/classes/classNamesResolver/colorClassNamesResolver';

const Panel = ({
  className,
  as,
  color,
  children,
  ...props
}: (JSX.IntrinsicElements['nav'] | JSX.IntrinsicElements['article']) &
  PropsWithChildren &
  Omit<Color, 'dark' | 'light'> &
  Omit<ElementProps, 'nameOf'>): JSX.Element => {
  const colorClass = container.resolve(ColorClassNameResolver);
  const classes = colorClass.prepareClasses({
    color,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='panel'
      as={as ?? 'nav'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Panel;
