import 'reflect-metadata';
import { JSX } from 'react';
import { Element } from '@/ui/elements/generic/element';
import { container } from 'tsyringe';
import classNames from 'classnames';
import { FileProps } from './file.props';
import { FileClasses } from './file.classes';
import { GrDownload } from 'react-icons/gr';
import { ElementProps } from '@/ui/elements/generic/element.props';

const File = ({
  className,
  label,
  name,
  color,
  size,
  centered,
  right,
  boxed,
  icon,
  fullwidth,
  dark,
  light,
  htmlProps,
  ...props
}: FileProps & ElementProps<JSX.IntrinsicElements['input']>): JSX.Element => {
  const inputClasses = container.resolve(FileClasses);
  return (
    <div
      className={classNames(
        className,
        'file',
        inputClasses.prepareClasses({
          color,
          size,
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
          htmlProps={
            {
              type: 'file',
              name: 'file',
              ...htmlProps,
            } as ElementProps<JSX.IntrinsicElements['input']>
          }
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
