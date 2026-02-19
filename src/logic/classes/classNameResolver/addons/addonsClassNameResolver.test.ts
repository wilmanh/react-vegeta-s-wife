import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { AddonsClassNameResolver } from './addonsClassNameResolver';

describe('Addons', () => {
  it.each([[true], [false], [undefined]])('has addons %s', (addons) => {
    const addonsClass = container.resolve(AddonsClassNameResolver);
    const classes = addonsClass.prepareClasses({
      addons,
    });
    expect(classNames(classes)).toEqual(addons ? 'has-addons' : '');
  });
});
