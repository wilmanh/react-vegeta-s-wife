import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { StateClassNameResolver } from './stateClassNamesResolver';

const stateClass = container.resolve(StateClassNameResolver);
describe('States', () => {
  it.each([[true], [false], [undefined]])('has active class %s', (active) => {
    const classes = stateClass.prepareClasses({
      active,
    });
    expect(classNames(classes)).toEqual(active ? 'is-active' : '');
  });
  it.each([[true], [false], [undefined]])('has focus class %s', (focus) => {
    const classes = stateClass.prepareClasses({
      focus,
    });
    expect(classNames(classes)).toEqual(focus ? 'is-focused' : '');
  });
  it.each([[true], [false], [undefined]])('has hover class %s', (hover) => {
    const classes = stateClass.prepareClasses({
      hover,
    });
    expect(classNames(classes)).toEqual(hover ? 'is-hovered' : '');
  });
});
