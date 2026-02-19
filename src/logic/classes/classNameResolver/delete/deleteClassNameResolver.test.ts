import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { DeleteClassNameResolver } from './deleteClassNameResolver';

describe('Delete', () => {
  it.each([[true], [false], [undefined]])('has class deleted %s', (deleted) => {
    const deleteClass = container.resolve(DeleteClassNameResolver);
    const classes = deleteClass.prepareClasses({
      deleted,
    });
    expect(classNames(classes)).toEqual(deleted ? 'is-delete' : '');
  });
});
