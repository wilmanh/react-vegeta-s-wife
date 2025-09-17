import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import { VisibilityHelpers } from './visibility.helpers';
import { VisibiltyShow } from './visibility.helpers.props';
import { Display } from '@/logic/types/display';
import classNames from 'classnames';

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
    (hidden, show, invisible, onlyScreenReader) => {
      const visibilityHelpers = container.resolve(VisibilityHelpers);
      const classes = visibilityHelpers.prepareClasses({
        hidden,
        show: show as Display<VisibiltyShow> | VisibiltyShow,
        invisible,
        onlyScreenReader,
      });
      let hiddenResult = `${hidden ? 'is-hidden' : ''}`;
      hiddenResult =
        typeof hidden === 'object'
          ? Object.entries(hidden)
              .filter((item) => item[1])
              .map((item) => `is-hidden-${item[0]}`)
              .join(' ')
          : hiddenResult;
      const showResult =
        typeof show === 'object'
          ? Object.entries(show)
              .filter((item) => item[1])
              .map((item) => `is-${item[1]}-${item[0]}`)
              .join(' ')
          : `is-${show}`;
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
