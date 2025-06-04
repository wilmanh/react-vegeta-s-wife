import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { CardHeaderProps } from './header.props';

const CardHeader = ({
  title,
  icon,
  ...props
}: JSX.IntrinsicElements['header'] &
  Omit<ElementProps, 'nameOf'> &
  CardHeaderProps): JSX.Element => {
  return (
    <Element nameOf='card-header' as='header' {...props}>
      {title ? (
        <Element nameOf='card-header-title' as='p'>
          {title}
        </Element>
      ) : null}
      {icon ? (
        <Element
          nameOf='card-header-icon'
          aria-label='more options'
          as='button'
        >
          {icon}
        </Element>
      ) : null}
    </Element>
  );
};

export default CardHeader;
