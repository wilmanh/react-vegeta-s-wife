import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';
import { CardFooterProps } from './footer.props';

const CardFooter = ({
  items,
  htmlProps,
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['footer']>, 'nameOf'> &
  CardFooterProps): JSX.Element => {
  return (
    <Element nameOf='card-footer' as='footer' {...props}>
      {items.map((item) => (
        <Element
          key={item.id}
          nameOf='card-footer-item'
          as='a'
          htmlProps={
            {
              href: item.href ?? '#',
              ...htmlProps,
            } as JSX.IntrinsicElements['a']
          }
        >
          {item.value}
        </Element>
      ))}
    </Element>
  );
};

export default CardFooter;
