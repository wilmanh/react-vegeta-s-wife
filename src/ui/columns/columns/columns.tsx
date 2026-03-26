import 'reflect-metadata';
import { JSX } from 'react';
import { Element as E } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { ColumnsProps } from './columns.props';
import { ColumnsClasses } from './columns.classes';
import { ElementProps } from '@/ui/elements/generic/element.props';

const Columns = ({
  gap,
  responsive,
  center,
  gapless,
  vCenter,
  children,
  multiline,
  className,
  ...props
}: ColumnsProps &
  Omit<
    ElementProps<JSX.IntrinsicElements['div']>,
    'nameOf' | 'as'
  >): JSX.Element => {
  const fieldClasses = container.resolve(ColumnsClasses);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element
      className={classNames(
        className,
        fieldClasses.prepareClasses({
          gap,
          responsive,
          center,
          gapless,
          vCenter,
          multiline,
        }),
      )}
      nameOf='columns'
      as={'div'}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Columns;
