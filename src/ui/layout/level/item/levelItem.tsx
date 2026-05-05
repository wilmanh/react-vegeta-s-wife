import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { LevelItemClasses } from './level.classes';
import { container } from 'tsyringe';
import { LevelItemProps } from './levelItem.props';
const LevelItem = ({
  textCentered,
  children,
  className,
  ...props
}: LevelItemProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['div']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const levelItemClasses = container.resolve(LevelItemClasses);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element
      className={classNames(
        className,
        levelItemClasses.prepareClasses({ textCentered }),
      )}
      nameOf='level-item'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};
export default LevelItem;
