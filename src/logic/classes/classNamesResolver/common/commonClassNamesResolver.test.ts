import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { CommonClassNameResolver } from './commonClassNamesResolver';

const commonHelpers = container.resolve(CommonClassNameResolver);
describe('Common', () => {
  it.each([[true], [false], [undefined]])(
    'has class is-loading %s',
    (loading) => {
      const classes = commonHelpers.prepareClasses({
        loading,
      });
      expect(classNames(classes)).toEqual(loading ? 'is-loading' : '');
    },
  );
});
