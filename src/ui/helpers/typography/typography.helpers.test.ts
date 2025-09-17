import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import { TypographyHelpers } from './typography.helpers';
import {
  FontFamily,
  TextAlignment,
  TextTransformation,
  TextWeight,
  TypographySize,
} from './typography.helpers.props';
import { Display } from '@/logic/types/display';
import classNames from 'classnames';

describe('TypographyHelpers', () => {
  it.each([
    ['1', 'primary', 'bold', 'centered', 'uppercase'],
    [2, 'secondary', 'light', 'justified', 'capitalized'],
    [
      { desktop: 2, mobile: '6' } as Display<TypographySize>,
      'code',
      'medium',
      { desktop: 'centered', mobile: 'left' } as Display<TextAlignment>,
      'lowercase',
    ],
  ])(
    'has size %s, font family %s, text weight %s, text alignment %s and text transformation %s',
    (size, fontFamily, textWeight, textAlignment, textTransformation) => {
      const typographyHelpers = container.resolve(TypographyHelpers);
      const classes = typographyHelpers.prepareClasses({
        size: size as TypographySize | Display<TypographySize>,
        fontFamily: fontFamily as FontFamily,
        textWeight: textWeight as TextWeight,
        textAlignment: textAlignment as TextAlignment | Display<TextAlignment>,
        textTransformation: textTransformation as TextTransformation,
      });
      const sizeResult =
        typeof size === 'object'
          ? Object.entries(size)
              .map((item) => `is-size-${item[1]}-${item[0]}`)
              .join(' ')
          : `is-size-${size}`;
      const textAlignmentResult =
        typeof textAlignment === 'object'
          ? Object.entries(textAlignment)
              .map((item) => `has-text-${item[1]}-${item[0]}`)
              .join(' ')
          : `has-text-${textAlignment}`;
      expect(classNames(classes)).toEqual(
        `${sizeResult ? sizeResult + ' ' : ''}${
          textAlignmentResult ? textAlignmentResult + ' ' : ''
        }${textTransformation ? 'is-' + textTransformation + ' ' : ''}${
          textWeight ? 'has-text-' + textWeight + ' ' : ''
        }${fontFamily ? 'has-family-' + fontFamily + ' ' : ''}`.trim(),
      );
    },
  );
});
