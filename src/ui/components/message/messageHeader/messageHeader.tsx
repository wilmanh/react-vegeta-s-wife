import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element as E } from '@/ui/elements/generic/element';

const MessageHeader = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<ElementProps<JSX.IntrinsicElements['div']>, 'nameOf'>): JSX.Element => {
  const Element = E as React.ComponentType<
    ElementProps<JSX.IntrinsicElements['div']>
  >;
  return (
    <Element nameOf='message-header' as={'div'} {...props}>
      {children}
    </Element>
  );
};

export default MessageHeader;
