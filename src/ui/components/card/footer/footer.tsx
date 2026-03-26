import 'reflect-metadata';
import { JSX } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';
import { CardFooterProps } from './footer.props';

const CardFooter = ({
  items,
  ...props
}: Omit<ElementProps<JSX.IntrinsicElements['footer']>, 'nameOf'> &
  CardFooterProps): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['footer']>
  >;
  return (
    <Element nameOf='card-footer' as='footer' {...props}>
      {items.map((item) => {
        if (item.href) {
          const Item = E as React.ComponentType<
            ElementProps<JSX.IntrinsicElements['a']>
          >;
          return (
            <Item
              key={item.id}
              nameOf='card-footer-item'
              as={'a'}
              href={item.href ?? undefined}
            >
              {item.value}
            </Item>
          );
        }
        const Item = E as React.ComponentType<
          ElementProps<JSX.IntrinsicElements['p']>
        >;
        return (
          <Item key={item.id} nameOf='card-footer-item' as={'p'}>
            {item.value}
          </Item>
        );
      })}
    </Element>
  );
};

export default CardFooter;
