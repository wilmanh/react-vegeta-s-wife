import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { RatioClassNameResolver } from './ratioClassNamesResolver';
import { Ratios } from '@/logic/types/ratios';

describe('Ratio', () => {
  it.each([
    ['square'],
    ['1by1'],
    ['5by4'],
    ['4by3'],
    ['3by2'],
    ['5by3'],
    ['16by9'],
    ['2by1'],
    ['3by1'],
    ['4by5'],
    ['3by4'],
    ['2by3'],
    ['9by16'],
    ['1by2'],
    ['1by3'],
    [undefined],
  ])('has ratio %s', (ratio) => {
    const ratioClass = container.resolve(RatioClassNameResolver);
    const classes = ratioClass.prepareClasses({
      ratio: ratio as Ratios,
    });
    expect(classNames(classes)).toEqual(ratio ? `is-${ratio}` : '');
  });
});
