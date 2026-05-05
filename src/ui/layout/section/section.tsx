import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

import { SectionClasses } from './section.classes';
import { SectionProps } from './section.props';

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
