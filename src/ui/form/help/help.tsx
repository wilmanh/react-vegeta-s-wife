import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { Color } from '@/logic/interfaces/props/color';
import { ColorClassNameResolver } from '@/logic/classes/classNamesResolver/colorClassNamesResolver';
import { container } from 'tsyringe';

const Help = ({
  className,
  color,
  ...props
}: JSX.IntrinsicElements['p'] &
  Color &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const colorClass = container.resolve(ColorClassNameResolver);
  return (
    <Element
      className={classNames(className, colorClass.prepareClasses({ color }))}
      nameOf='help'
      as={'p'}
      {...props}
    />
  );
};

export default Help;
