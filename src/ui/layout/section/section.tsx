import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { SectionProps } from './section.props';
import { SectionClasses } from './section.classes';
const Section = ({
  size,
  children,
  className,
  ...props
}: JSX.IntrinsicElements['div'] &
  SectionProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const sectionClasses = container.resolve(SectionClasses);
  return (
    <Element
      className={classNames(className, sectionClasses.prepareClasses({ size }))}
      nameOf='section'
      as={'section'}
      {...props}
    >
      {children}
    </Element>
  );
};
export default Section;
