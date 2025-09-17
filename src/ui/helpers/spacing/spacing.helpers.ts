import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { SpacingHelperProps } from './spacing.helpers.props';

export class SpacingHelpers<T extends SpacingHelperProps>
  implements ClassNameFactory<T>
{
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const {
      m,
      margin,
      mt,
      marginTop,
      mr,
      marginRight,
      mb,
      marginBottom,
      ml,
      marginLeft,
      mx,
      marginX,
      my,
      marginY,
      p,
      padding,
      pt,
      paddingTop,
      pr,
      paddingRight,
      pb,
      paddingBottom,
      pl,
      paddingLeft,
      px,
      paddingX,
      py,
      paddingY,
    } = parameters;
    return {
      [`m-${m}`]: !!m?.toString(),
      [`m-${margin}`]: !!margin?.toString(),
      [`mt-${mt}`]: !!mt?.toString(),
      [`mt-${marginTop}`]: !!marginTop?.toString(),
      [`mb-${mb}`]: !!mb?.toString(),
      [`mb-${marginBottom}`]: !!marginBottom?.toString(),
      [`mr-${mr}`]: !!mr?.toString(),
      [`mr-${marginRight}`]: !!marginRight?.toString(),
      [`ml-${ml}`]: !!ml?.toString(),
      [`ml-${marginLeft}`]: !!marginLeft?.toString(),
      [`mx-${mx}`]: !!mx?.toString(),
      [`mx-${marginX}`]: !!marginX?.toString(),
      [`my-${my}`]: !!my?.toString(),
      [`my-${marginY}`]: !!marginY?.toString(),
      [`p-${p}`]: !!p?.toString(),
      [`p-${padding}`]: !!padding?.toString(),
      [`pt-${pt}`]: !!pt?.toString(),
      [`pt-${paddingTop}`]: !!paddingTop?.toString(),
      [`pb-${pb}`]: !!pb?.toString(),
      [`pb-${paddingBottom}`]: !!paddingBottom?.toString(),
      [`pr-${pr}`]: !!pr?.toString(),
      [`pr-${paddingRight}`]: !!paddingRight?.toString(),
      [`pl-${pl}`]: !!pl?.toString(),
      [`pl-${paddingLeft}`]: !!paddingLeft?.toString(),
      [`px-${px}`]: !!px?.toString(),
      [`px-${paddingX}`]: !!paddingX?.toString(),
      [`py-${py}`]: !!py?.toString(),
      [`py-${paddingY}`]: !!paddingY?.toString(),
    };
  };
}
