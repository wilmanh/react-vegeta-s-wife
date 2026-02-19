import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { Color } from '@/logic/interfaces/props/color';
import { container } from 'tsyringe';
import { ColorClassNameResolver } from '@/logic/classes/classNameResolver/color/colorClassNameResolver';

const Help = ({
  className,
  color,
  ...props
}: Color &
  Omit<
    ElementProps<JSX.IntrinsicElements['p']>,
    'nameOf' | 'as'
  >): JSX.Element => {
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
