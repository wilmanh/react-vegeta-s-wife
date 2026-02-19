import { ClassNameFactory } from '@/logic/classes/classNameFactory';
import { GenericObject } from '@/logic/interfaces/genericObject';
import { Helpers } from '@/logic/interfaces/props/helpers';
import { ColorHelpers } from '@/ui/helpers/colors/colors.helpers';
import { FlexboxHelpers } from '@/ui/helpers/flexbox/flexbox.helpers';
import { OthersHelpers } from '@/ui/helpers/others/others.helpers';
import { SpacingHelpers } from '@/ui/helpers/spacing/spacing.helpers';
import { TypographyHelpers } from '@/ui/helpers/typography/typography.helpers';
import { VisibilityHelpers } from '@/ui/helpers/visibility/visibility.helpers';
import { container } from 'tsyringe';

export class ElementClasses<T extends Helpers> implements ClassNameFactory<T> {
  prepareClasses: (parameters: T) => GenericObject = (parameters) => {
    const colorHelpers = container.resolve(ColorHelpers);
    const flexboxHelpers = container.resolve(FlexboxHelpers);
    const spacingHelpers = container.resolve(SpacingHelpers);
    const visibilityHelpers = container.resolve(VisibilityHelpers);
    const typographyHelpers = container.resolve(TypographyHelpers);
    const othersHelpers = container.resolve(OthersHelpers);

    const { flexbox, spacing, typography, visibility, extra, ...colors } =
      parameters;

    return {
      ...colorHelpers.prepareClasses(colors ?? {}),
      ...flexboxHelpers.prepareClasses(flexbox ?? {}),
      ...spacingHelpers.prepareClasses(spacing ?? {}),
      ...visibilityHelpers.prepareClasses(visibility ?? {}),
      ...typographyHelpers.prepareClasses(typography ?? {}),
      ...othersHelpers.prepareClasses(extra ?? {}),
    };
  };
}
