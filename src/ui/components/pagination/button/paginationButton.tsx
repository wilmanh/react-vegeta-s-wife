import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { PaginationButtonProps } from './paginationButton.props';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { PaginationButtonClasses } from './paginationButton.classess';

const PaginationButton = ({
  children,
  className,
  type,
  disabled,
  ...props
}: JSX.IntrinsicElements['a'] &
  PropsWithChildren &
  PaginationButtonProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const classResolver = container.resolve(PaginationButtonClasses);
  const classes = classResolver.prepareClasses({
    disabled,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf={`pagination-${type}`}
      as={'a'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default PaginationButton;
