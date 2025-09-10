import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
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
}: PropsWithChildren &
  PaginationButtonProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['a']>,
    'nameOf' | 'as'
  >): JSX.Element => {
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
