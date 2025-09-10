import 'reflect-metadata';
import { JSX, PropsWithChildren } from 'react';
import { ElementProps } from '@/ui/elements/generic/element.props';
import { Element } from '@/ui/elements/generic/element';

const ModalCardFooter = ({
  children,
  ...props
}: PropsWithChildren &
  Omit<
    ElementProps<JSX.IntrinsicElements['footer']>,
    'nameOf'
  >): JSX.Element => {
  return (
    <Element nameOf='modal-card-foot' as={'footer'} {...props}>
      <Element nameOf='buttons' as={'div'}>
        {children}
      </Element>
    </Element>
  );
};

export default ModalCardFooter;
