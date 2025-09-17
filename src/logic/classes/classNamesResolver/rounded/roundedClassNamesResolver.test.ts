import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { RoundedClassNameResolver } from './roundedClassNamesResolver';

const roundedClass = container.resolve(RoundedClassNameResolver);
describe('Rounded', () => {
  it.each([[true], [false], [undefined]])('has rounded %s', (isRounded) => {
    const classes = roundedClass.prepareClasses({
      isRounded,
    });
    expect(classNames(classes)).toEqual(isRounded ? 'is-rounded' : '');
  });
  it.each([[true], [false], [undefined]])('has rounded %s', (isRounded) => {
    const classes = roundedClass.prepareClasses({
      rounded: isRounded,
    });
    expect(classNames(classes)).toEqual(isRounded ? 'is-rounded' : '');
  });
});
