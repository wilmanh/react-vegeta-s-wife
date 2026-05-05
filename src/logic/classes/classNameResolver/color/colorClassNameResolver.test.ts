import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { Colors } from '@/logic/types/colors';

import { ColorClassNameResolver } from './colorClassNameResolver';

const colorHelpers = container.resolve(ColorClassNameResolver);
describe('Colors', () => {
  it.each([
    [true, false],
    [false, true],
    [undefined, undefined],
  ])('has class is-dark and is-light %s', (dark, light) => {
    const classes = colorHelpers.prepareClasses({
      dark,
      light,
    });
    expect(classNames(classes)).toEqual(
      `${dark ? 'is-dark ' : ''}${light ? 'is-light ' : ''}`.trim(),
    );
  });
  it.each([
    ['white'],
    ['black'],
    ['text'],
    ['ghost'],
    ['primary'],
    ['link'],
    ['info'],
    ['success'],
    ['warning'],
    ['danger'],
    [undefined],
  ])('has class is-%s', (color) => {
    const classes = colorHelpers.prepareClasses({
      color: color as Colors,
    });
    expect(classNames(classes)).toEqual(color ? `is-${color}` : '');
  });
});
