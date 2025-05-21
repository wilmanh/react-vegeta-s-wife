import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { CrumbProps } from './crumb.props';
import { CrumbClasses } from './crumb.classes';

export const Crumb = ({
  children,
  active,
  href,
  className,
  ...props
}: JSX.IntrinsicElements['li'] &
  Omit<ElementProps, 'nameOf'> &
  CrumbProps): JSX.Element => {
  const classesResolver = container.resolve(CrumbClasses);
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
