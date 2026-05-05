import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { LevelProps } from './level.props';
import { LevelClasses } from './level.classes';
const Level = ({
  mobile,
  children,
  className,
  ...props
}: LevelProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['nav']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const levelClasses = container.resolve(LevelClasses);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['nav']>
  >;
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
