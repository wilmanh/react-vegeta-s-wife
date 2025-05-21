import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/logic/interfaces/props/element';
import { Element } from '@/ui/elements/generic/element';
import { CardFooterProps } from './footer.props';

const CardFooter = ({
  items,
  ...props
}: JSX.IntrinsicElements['footer'] &
  Omit<ElementProps, 'nameOf'> &
  CardFooterProps): JSX.Element => {
  return (
    <Element nameOf='card-footer' as='footer' {...props}>
      {items.map((item) => (
        <Element
          key={item.id}
          nameOf='card-footer-item'
          as='a'
          href={item.href ?? '#'}
        >
          {item.value}
        </Element>
      ))}
    </Element>
  );
};

export default CardFooter;
