import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { ColorHelpers } from './colors.helpers';
import {
  ColorHelper as Color,
  ShadeHelper as Shade,
} from './color.helpers.props';
import { container } from 'tsyringe';
import classNames from 'classnames';

describe('ColorsHelpers', () => {
  it.each([
    ['primary' as Color, 'white' as Color, '40' as Shade, null as Shade],
    ['link' as Color, 'white' as Color, '70' as Shade, '10' as Shade],
    ['info' as Color, 'white' as Color, '50' as Shade, '30' as Shade],
    ['success' as Color, 'white' as Color, '35' as Shade, '40' as Shade],
    ['warning' as Color, 'black' as Color, '30' as Shade, '50' as Shade],
    ['danger' as Color, 'white' as Color, null as Shade, '70' as Shade],
  ])(
    'has background color %s and text %s',
    (backgroundColor, textColor, backgroundShade, textShade) => {
      const colorHelpers = container.resolve(ColorHelpers);
      const classes = colorHelpers.prepareClasses({
        backgroundColor,
        textColor,
        backgroundShade,
        textShade,
      });
      const bgColor = backgroundShade
        ? `${backgroundColor}-${backgroundShade}`
        : backgroundColor;
      const txtColor = textShade ? `${textColor}-${textShade}` : textColor;
      expect(classNames(classes)).toEqual(
        `has-background-${bgColor} has-text-${txtColor}`,
      );
    },
  );
});
