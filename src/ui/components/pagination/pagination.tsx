import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { PaginationProps } from './pagination.props';
import { container } from 'tsyringe';
import { PagintaionClasses } from './pagination.classess';
import classNames from 'classnames';

const Pagination = ({
  isRounded,
  className,
  children,
  position,
  size,
  htmlProps,
  ...props
}: PropsWithChildren &
  PaginationProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['nav']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const classResolver = container.resolve(PagintaionClasses);
  const classes = classResolver.prepareClasses({
    position,
    isRounded,
    size,
  });
  return (
    <Element
      className={classNames(className, classes)}
      nameOf='pagination'
      as={'nav'}
      htmlProps={{
        role: htmlProps?.role ?? 'navigation',
        'aria-label': htmlProps?.ariaLabel ?? 'pagination',
        ...htmlProps,
      }}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Pagination;
