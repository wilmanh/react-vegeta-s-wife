import classNames from 'classnames';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { describe, expect, it } from 'vitest';

import { OthersHelpers } from './others.helpers';

const othersHelpers = container.resolve(OthersHelpers);
describe('OthersHelpers', () => {
  it.each([
    [true, false, true, false, true],
    [false, true, false, true, false],
  ])(
    'has pulledRight %s radiusless %s relative %s shadowless %s unselectable',
    (pulledRight, radiusless, relative, shadowless, unselectable) => {
      const classes = othersHelpers.prepareClasses({
        pulledRight,
        radiusless,
        relative,
        shadowless,
        unselectable,
      });

      expect(classNames(classes)).toEqual(
        `${pulledRight ? 'is-pulled-right ' : ''}${
          radiusless ? 'is-radiusless ' : ''
        }${shadowless ? 'is-shadowless ' : ''}${
          unselectable ? 'is-unselectable ' : ''
        }${relative ? 'is-relative ' : ''}`.trim(),
      );
    },
  );
  it.each([
    [true, false, true, false, true],
    [false, true, false, true, false],
  ])(
    'has clearfix %s clickable %s clipped %s overlay %s pulledLeft %s',
    (clearfix, clickable, clipped, overlay, pulledLeft) => {
      const classes = othersHelpers.prepareClasses({
        clearfix,
        clickable,
        clipped,
        overlay,
        pulledLeft,
      });
      expect(classNames(classes)).toEqual(
        `${clearfix ? 'is-clearfix ' : ''}${
          pulledLeft ? 'is-pulled-left ' : ''
        }${overlay ? 'is-overlay ' : ''}${clickable ? 'is-clickable ' : ''}${
          clipped ? 'is-clipped ' : ''
        }`.trim(),
      );
    },
  );
});
