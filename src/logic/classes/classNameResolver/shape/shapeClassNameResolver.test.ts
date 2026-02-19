import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { ShapeClassNameResolver } from './shapeClassNameResolver';
import { Shapes } from '@/logic/types/shapes';

describe('Shape', () => {
  it.each([
    ['16x16'],
    ['24x24'],
    ['32x32'],
    ['48x48'],
    ['64x64'],
    ['96x96'],
    ['128x128'],
    [undefined],
  ])('has shape %s', (shape) => {
    const shapeClass = container.resolve(ShapeClassNameResolver);
    const classes = shapeClass.prepareClasses({
      shape: shape as Shapes,
    });
    expect(classNames(classes)).toEqual(shape ? `is-${shape}` : '');
  });
});
