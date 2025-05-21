import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { VideoProps } from './video.props';
import { VideoClasses } from './video.classes';

export const Video = ({
  key,
  children,
  ratio,
  width,
  className,
  title,
  ...props
}: VideoProps & PropsWithChildren & JSX.IntrinsicElements['iframe']):
  | JSX.Element
  | undefined => {
  const classesResolver = container.resolve(VideoClasses);
  const figureClasses = classesResolver.prepareClasses({ ratio });
  return (
    <figure
      key={key}
      style={{ width }}
      className={classNames('image', figureClasses)}
    >
      <iframe
        title={title ?? 'Untitled Video'}
        className={classNames('has-ratio', className)}
        {...props}
      >
        {children}
      </iframe>
    </figure>
  );
};
