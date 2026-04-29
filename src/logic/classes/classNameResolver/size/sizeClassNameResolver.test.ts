import classNames from 'classnames';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { describe, expect, it } from 'vitest';

import { Sizes } from '@/logic/types/sizes';

import { SizeClassNameResolver } from './sizeClassNameResolver';

describe('Size', () => {
  it.each([['small'], ['normal'], ['medium'], ['large'], [undefined]])(
    'has size %s',
    (size) => {
      const sizeClass = container.resolve(SizeClassNameResolver);
      const classes = sizeClass.prepareClasses({
        scale: size as Sizes,
      });
      expect(classNames(classes)).toEqual(size ? `is-${size}` : '');
    },
  );
});
