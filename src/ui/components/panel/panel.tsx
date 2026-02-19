import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { Color } from '@/logic/interfaces/props/color';
import { ColorClassNameResolver } from '@/logic/classes/classNameResolver/color/colorClassNameResolver';

const Panel = ({
  className,
  as,
  color,
  children,
  ...props
}: PropsWithChildren &
  Omit<Color, 'dark' | 'light'> &
  Omit<
    ElementProps<
      JSX.IntrinsicElements['nav'] | JSX.IntrinsicElements['article']
    >,
    'nameOf'
  >): JSX.Element => {
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
