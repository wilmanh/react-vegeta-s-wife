import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import { ClassNameResolver } from '@/logic/classes/classNamesResolver';
import classNames from 'classnames';
import { ImageProps } from './image.props';

export const Image = ({
  shape,
  ratio,
  width,
  className,
  ...props
}: JSX.IntrinsicElements['img'] & ImageProps): JSX.Element | undefined => {
  const classesResolver = container.resolve(ClassNameResolver);
  const figureClasses = classesResolver.prepareClasses({ shape, ratio });

  /*TODO: export to a non nextJs Project */
  return (
    <figure style={{ width }} className={classNames('image', figureClasses)}>
      <img alt='placeholder alt' className={classNames(className)} {...props} />
    </figure>
  );
};
