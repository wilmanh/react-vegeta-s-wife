import 'reflect-metadata';
import { JSX } from 'react';
import classNames from 'classnames';
import { container } from 'tsyringe';
import { ProgressProps } from './progress.props';
import { ProgressClasses } from './progress.classes';

export const Progress = ({
  scale,
  children,
  color,
  ...props
}: JSX.IntrinsicElements['progress'] & ProgressProps): JSX.Element => {
  const classesResolver = container.resolve(ProgressClasses);

  return (
    <progress
      className={classNames(
        'progress',
        classesResolver.prepareClasses({ color, scale }),
      )}
      {...props}
    >
      {children}
    </progress>
  );
};
