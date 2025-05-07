import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import { ClassNameResolver } from '@/logic/classes/classNamesResolver';
import classNames from 'classnames';
import { ProgressProps } from './progress.props';

export const Progress = ({
  size,
  children,
  color,
  ...props
}: JSX.IntrinsicElements['progress'] & ProgressProps): JSX.Element => {
  const classesResolver = container.resolve(ClassNameResolver);

  return (
    <progress
      className={classNames(
        'progress',
        classesResolver.prepareClasses({ color, size }),
      )}
      {...props}
    >
      {children}
    </progress>
  );
};
