import { container } from 'tsyringe';

import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { Helpers } from '@/logic/interfaces/props/helpers';
import { ColorHelpers } from '@/ui/helpers/colors/colors.helpers';
import { FlexboxHelpers } from '@/ui/helpers/flexbox/flexbox.helpers';
import { OthersHelpers } from '@/ui/helpers/others/others.helpers';
import { SpacingHelpers } from '@/ui/helpers/spacing/spacing.helpers';
import { TypographyHelpers } from '@/ui/helpers/typography/typography.helpers';
import { VisibilityHelpers } from '@/ui/helpers/visibility/visibility.helpers';

export class ElementClasses<T extends Helpers> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const colorHelpers = container.resolve(ColorHelpers);
    const flexboxHelpers = container.resolve(FlexboxHelpers);
    const spacingHelpers = container.resolve(SpacingHelpers);
    const visibilityHelpers = container.resolve(VisibilityHelpers);
    const typographyHelpers = container.resolve(TypographyHelpers);
    const othersHelpers = container.resolve(OthersHelpers);

    const {
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      alignSelf,
      grow,
      shrink,
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      marginX,
      marginY,
      padding,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingX,
      paddingY,
      m,
      mt,
      mb,
      ml,
      mr,
      my,
      mx,
      p,
      pt,
      pb,
      pl,
      pr,
      py,
      px,
      fontSize,
      textAlignment,
      textTransformation,
      textWeight,
      fontFamily,
      invisible,
      isHidden,
      onlyScreenReader,
      isShow,
      clearfix,
      pulledLeft,
      pulledRight,
      overlay,
      clipped,
      radiusless,
      shadowless,
      unselectable,
      clickable,
      relative,
      ...colors
    } = parameters;

    return {
      ...colorHelpers.prepareClasses(colors ?? {}),
      ...flexboxHelpers.prepareClasses({
        alignContent,
        alignItems,
        justifyContent,
        grow,
        shrink,
        flexDirection,
        flexWrap,
        alignSelf,
      }),
      ...spacingHelpers.prepareClasses({
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
      }),
      ...visibilityHelpers.prepareClasses({
        isHidden,
        invisible,
        onlyScreenReader,
        isShow,
      }),
      ...typographyHelpers.prepareClasses({
        fontFamily,
        fontSize,
        textAlignment,
        textTransformation,
        textWeight,
      }),
      ...othersHelpers.prepareClasses({
        clearfix,
        pulledLeft,
        pulledRight,
        overlay,
        clipped,
        radiusless,
        shadowless,
        unselectable,
        clickable,
        relative,
      }),
    };
  };
}
