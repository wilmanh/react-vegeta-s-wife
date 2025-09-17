import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { GroupedClassNameResolver } from './groupedClassNamesResolver';

describe('Grouped', () => {
  it.each([
    [true, false],
    [false, true],
    [undefined, undefined],
  ])('has class Grouped %s and GroupedMultiline %s', (grouped, multiline) => {
    const groupedClassName = container.resolve(GroupedClassNameResolver);
    const classes = groupedClassName.prepareClasses({
      grouped,
      multiline,
    });
    expect(classNames(classes)).toEqual(
      `${grouped ? 'is-grouped ' : ''}${
        multiline ? 'is-grouped-multiline ' : ''
      }`.trim(),
    );
  });
});
