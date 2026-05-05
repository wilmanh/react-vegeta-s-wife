import classNames from 'classnames';
import { JSX } from 'react';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { ProgressClasses } from './progress.classes';
import { ProgressProps } from './progress.props';

export const Progress = ({
  size,
  children,
  className,
  color,
  ...props
}: JSX.IntrinsicElements['progress'] & ProgressProps): JSX.Element => {
  const classesResolver = container.resolve(ProgressClasses);

  return (
    <progress
      className={classNames(
        'progress',
        classesResolver.prepareClasses({ color, size }),
        className,
      )}
      {...props}
    >
      {children}
    </progress>
  );
};
