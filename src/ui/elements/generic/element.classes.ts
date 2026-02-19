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

    return {
      ...colorHelpers.prepareClasses(parameters?.colors ?? {}),
      ...flexboxHelpers.prepareClasses(parameters?.flexbox ?? {}),
      ...spacingHelpers.prepareClasses(parameters?.spacing ?? {}),
      ...visibilityHelpers.prepareClasses(parameters?.visibility ?? {}),
      ...typographyHelpers.prepareClasses(parameters?.typography ?? {}),
      ...othersHelpers.prepareClasses(parameters?.extra ?? {}),
    };
  };
}
