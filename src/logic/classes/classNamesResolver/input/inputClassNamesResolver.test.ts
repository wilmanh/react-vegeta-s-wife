import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { InputClassNameResolver } from './inputClassNamesResolver';

const inputClass = container.resolve(InputClassNameResolver);
describe('Input', () => {
  it.each([[true], [false], [undefined]])('has class static %s', (frozen) => {
    const classes = inputClass.prepareClasses({
      static: frozen,
    });
    expect(classNames(classes)).toEqual(frozen ? 'is-static' : '');
  });
  it.each([[true], [false], [undefined]])('has class fixed %s', (fixed) => {
    const classes = inputClass.prepareClasses({
      fixed,
    });
    expect(classNames(classes)).toEqual(fixed ? 'has-fixed-size' : '');
  });
});
