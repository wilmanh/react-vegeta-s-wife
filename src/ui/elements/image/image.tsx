import 'reflect-metadata';
import { JSX } from 'react';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { ImageProps } from './image.props';
import { ImageClasses } from './image.classes';
import { RoundedClassNameResolver } from '@/logic/classes/classNamesResolver/roundedClassNamesResolver';

export const Image = ({
  shape,
  ratio,
  isRounded,
  width,
  className,
  ...props
}: JSX.IntrinsicElements['img'] & ImageProps): JSX.Element | undefined => {
  const imageResolver = container.resolve(ImageClasses);
  const roundedResolver = container.resolve(RoundedClassNameResolver);
  const figureClasses = imageResolver.prepareClasses({ shape, ratio });
  const roundedClasses = roundedResolver.prepareClasses({ isRounded });

  return (
    <figure style={{ width }} className={classNames('image', figureClasses)}>
      <img
        alt='placeholder alt'
        className={classNames(className, roundedClasses)}
        {...props}
      />
    </figure>
  );
};
