import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import { SpacingHelpers } from './spacing.helpers';
import { shuffleArray } from '@/logic/functions/shuffle';
import { SpacingHelper } from './spacing.helpers.props';
import classNames from 'classnames';
const arrayNumbers = [0, '1', 2, '3', 'auto'];

const spacingTests = [
  shuffleArray(arrayNumbers),
  //   shuffleArray(arrayNumbers),
  //   shuffleArray(arrayNumbers),
  //   shuffleArray(arrayNumbers),
];

const spacingHelper = container.resolve(SpacingHelpers);
describe('SpacingHelper', () => {
  it.each(spacingTests)(
    'has paddings %s %s %s %s',
    (paddingTop, paddingBottom, paddingLeft, paddingRight) => {
      const classes = spacingHelper.prepareClasses({
        paddingTop: paddingTop as SpacingHelper,
        paddingBottom: paddingBottom as SpacingHelper,
        paddingLeft: paddingLeft as SpacingHelper,
        paddingRight: paddingRight as SpacingHelper,
      });
      expect(classNames(classes)).toEqual(
        `${paddingTop.toString() ? 'pt-' + paddingTop + ' ' : ''}${
          paddingBottom.toString() ? 'pb-' + paddingBottom + ' ' : ''
        }${paddingRight.toString() ? 'pr-' + paddingRight + ' ' : ''}${
          paddingLeft.toString() ? 'pl-' + paddingLeft + ' ' : ''
        }`.trim(),
      );
    },
  );
  it.each(spacingTests)(
    'has paddings %s %s %s %s',
    (paddingTop, paddingBottom, paddingLeft, paddingRight) => {
      const classes = spacingHelper.prepareClasses({
        pb: paddingBottom as SpacingHelper,
        pt: paddingTop as SpacingHelper,
        pl: paddingLeft as SpacingHelper,
        pr: paddingRight as SpacingHelper,
      });
      expect(classNames(classes)).toEqual(
        `${paddingTop.toString() ? 'pt-' + paddingTop + ' ' : ''}${
          paddingBottom.toString() ? 'pb-' + paddingBottom + ' ' : ''
        }${paddingRight.toString() ? 'pr-' + paddingRight + ' ' : ''}${
          paddingLeft.toString() ? 'pl-' + paddingLeft + ' ' : ''
        }`.trim(),
      );
    },
  );
  it.each(spacingTests)(
    'has margins %s %s %s %s',
    (marginTop, marginBottom, marginLeft, marginRight) => {
      const classes = spacingHelper.prepareClasses({
        marginBottom: marginBottom as SpacingHelper,
        marginTop: marginTop as SpacingHelper,
        marginLeft: marginLeft as SpacingHelper,
        marginRight: marginRight as SpacingHelper,
      });
      expect(classNames(classes)).toEqual(
        `${marginTop.toString() ? 'mt-' + marginTop + ' ' : ''}${
          marginBottom.toString() ? 'mb-' + marginBottom + ' ' : ''
        }${marginRight.toString() ? 'mr-' + marginRight + ' ' : ''}${
          marginLeft.toString() ? 'ml-' + marginLeft + ' ' : ''
        }`.trim(),
      );
    },
  );
  it.each(spacingTests)(
    'has margins %s %s %s %s',
    (marginTop, marginBottom, marginLeft, marginRight) => {
      const classes = spacingHelper.prepareClasses({
        mb: marginBottom as SpacingHelper,
        mt: marginTop as SpacingHelper,
        ml: marginLeft as SpacingHelper,
        mr: marginRight as SpacingHelper,
      });
      expect(classNames(classes)).toEqual(
        `${marginTop.toString() ? 'mt-' + marginTop + ' ' : ''}${
          marginBottom.toString() ? 'mb-' + marginBottom + ' ' : ''
        }${marginRight.toString() ? 'mr-' + marginRight + ' ' : ''}${
          marginLeft.toString() ? 'ml-' + marginLeft + ' ' : ''
        }`.trim(),
      );
    },
  );
});
