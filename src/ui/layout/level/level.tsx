import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { LevelProps } from './level.props';
import { LevelClasses } from './level.classes';
const Level = ({
  mobile,
  children,
  className,
  ...props
}: JSX.IntrinsicElements['nav'] &
  LevelProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const levelClasses = container.resolve(LevelClasses);
  return (
    <Element
      className={classNames(className, levelClasses.prepareClasses({ mobile }))}
      nameOf='level'
      as={'nav'}
      {...props}
    >
      {children}
    </Element>
  );
};
export default Level;
