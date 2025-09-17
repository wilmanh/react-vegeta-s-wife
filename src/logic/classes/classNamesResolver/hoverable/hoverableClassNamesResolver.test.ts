import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { HoverableClassNameResolver } from './hoverableClassNamesResolver';

describe('Hoverable', () => {
  it.each([[true], [false], [undefined]])('has addons %s', (hoverable) => {
    const hoverableClass = container.resolve(HoverableClassNameResolver);
    const classes = hoverableClass.prepareClasses({
      hoverable,
    });
    expect(classNames(classes)).toEqual(hoverable ? 'is-hoverable' : '');
  });
});
