import classNames from 'classnames';
import { JSX } from 'react';
import { GrDownload } from 'react-icons/gr';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { Element as E } from '@/ui/elements/generic/element';
import { ElementProps } from '@/ui/elements/generic/element.props';

import { FileClasses } from './file.classes';
import { FileProps } from './file.props';

const File = ({
  className,
  label,
  name,
  color,
  scale,
  centered,
  right,
  boxed,
  icon,
  fullwidth,
  dark,
  light,
  ...props
}: FileProps & ElementProps<JSX.IntrinsicElements['input']>): JSX.Element => {
  const inputClasses = container.resolve(FileClasses);
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['input']>
  >;
  return (
    <div
      className={classNames(
        className,
        'file',
        inputClasses.prepareClasses({
          color,
          scale,
          dark,
          light,
          fullwidth,
          name,
          right,
          centered,
          boxed,
        }),
      )}
    >
      <label className='file-label'>
        <Element
          nameOf='file-input'
          as={'input'}
          {...props}
          name={name ?? 'file'}
          type={'file'}
        />
        <span className='file-cta'>
          <span className='file-icon'>{icon ?? <GrDownload />}</span>
          <span className='file-label'>{label ?? 'Choose a file...'}</span>
        </span>
        {name ? <span className='file-name'>{name}</span> : null}
      </label>
    </div>
  );
};

export default File;
