import { ColorHelperProps } from '@/ui/helpers/colors/color.helpers.props';
import { FlexboxHelperProps } from '@/ui/helpers/flexbox/flexbox.helpers.props';
import { OthersHelperProps } from '@/ui/helpers/others/others.helpers.props';
import { SpacingHelperProps } from '@/ui/helpers/spacing/spacing.helpers.props';
import { TypographyHelperProps } from '@/ui/helpers/typography/typography.helpers.props';
import { VisibilityHelperProps } from '@/ui/helpers/visibility/visibility.helpers.props';

export interface Helpers extends ColorHelperProps {
  flexbox?: FlexboxHelperProps;
  spacing?: SpacingHelperProps;
  typography?: TypographyHelperProps;
  visibility?: VisibilityHelperProps;
  extra?: OthersHelperProps;
}
