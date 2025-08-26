import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { ColumnsProps } from './columns.props';
import { ColumnsClasses } from './columns.classes';

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
}: JSX.IntrinsicElements['div'] &
  ColumnsProps &
  Omit<ElementProps, 'nameOf' | 'as'>): JSX.Element => {
  const fieldClasses = container.resolve(ColumnsClasses);
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
