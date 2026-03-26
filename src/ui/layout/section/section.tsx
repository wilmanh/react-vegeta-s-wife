import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { SectionProps } from './section.props';
import { SectionClasses } from './section.classes';
const Section = ({
  size,
  children,
  className,
  ...props
}: SectionProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['div']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
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
