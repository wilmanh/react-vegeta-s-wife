import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { FullwidthClassNameResolver } from './fullwidthClassNameResolver';

describe('Fullwidth', () => {
  it.each([[true], [false], [undefined]])(
    'has class fullwidth %s',
    (fullwidth) => {
      const fullwidthClass = container.resolve(FullwidthClassNameResolver);
      const classes = fullwidthClass.prepareClasses({
        fullwidth,
      });
      expect(classNames(classes)).toEqual(fullwidth ? 'is-fullwidth' : '');
    },
  );
});
