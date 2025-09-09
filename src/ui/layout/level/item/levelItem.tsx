import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { LevelItemClasses } from './level.classes';
import { container } from 'tsyringe';
import { LevelItemProps } from './levelItem.props';
const LevelItem = ({
  textCentered,
  children,
  className,
  ...props
}: JSX.IntrinsicElements['div'] &
  LevelItemProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const levelItemClasses = container.resolve(LevelItemClasses);
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
