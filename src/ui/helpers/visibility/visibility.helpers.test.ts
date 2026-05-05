import classNames from 'classnames';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { describe, expect, it } from 'vitest';

import { Display } from '@/logic/types/display';

import { VisibilityHelpers } from './visibility.helpers';
import { VisibiltyShow } from './visibility.helpers.props';

describe('VisibilityHelpers', () => {
  it.each([
    [false, 'flex', false, true],
    [true, 'inline', true, false],
    [
      { desktop: false, mobile: true, touch: true } as Display<boolean>,
      {
        desktop: 'inline',
        tablet: 'flex',
        widescreen: 'block',
      } as Display<VisibiltyShow>,
      true,
      false,
    ],
  ])(
    'has hidden %s, show %s, invisible %s and onlyScreenReader %s',
    (isHidden, isShow, invisible, onlyScreenReader) => {
      const visibilityHelpers = container.resolve(VisibilityHelpers);
      const classes = visibilityHelpers.prepareClasses({
        isHidden,
        isShow: isShow as Display<VisibiltyShow> | VisibiltyShow,
        invisible,
        onlyScreenReader,
      });
      let hiddenResult = `${isHidden ? 'is-hidden' : ''}`;
      hiddenResult =
        typeof isHidden === 'object'
          ? Object.entries(isHidden)
              .filter((item) => item[1])
              .map((item) => `is-hidden-${item[0]}`)
              .join(' ')
          : hiddenResult;
      const showResult =
        typeof isShow === 'object'
          ? Object.entries(isShow)
              .filter((item) => item[1])
              .map((item) => `is-${item[1]}-${item[0]}`)
              .join(' ')
          : `is-${isShow}`;
      expect(classNames(classes)).toEqual(
        `${hiddenResult ? hiddenResult + ' ' : ''}${
          showResult ? showResult + ' ' : ''
        }${invisible ? 'is-invisible ' : ''}${
          onlyScreenReader ? 'is-sr-only ' : ''
        }`.trim(),
      );
    },
  );
});
