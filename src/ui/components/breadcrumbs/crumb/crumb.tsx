import 'reflect-metadata';
import { JSX } from 'react';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { CrumbProps } from './crumb.props';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { StateClassNameResolver } from '@/logic/classes/classNamesResolver/state/stateClassNamesResolver';

export const Crumb = ({
  children,
  active,
  href,
  className,
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['li']>, 'nameOf'> &
  CrumbProps): JSX.Element => {
  const classesResolver = container.resolve(StateClassNameResolver);
  const classes = classesResolver.prepareClasses({ active });
  return (
    <Element
      nameOf=''
      as='li'
      className={classNames(className, classes)}
      {...props}
    >
      <a aria-current={active ? 'page' : undefined} href={href ?? '#'}>
        {children}
      </a>
    </Element>
  );
};
