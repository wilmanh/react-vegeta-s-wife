import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { SizeClassNameResolver } from './sizeClassNameResolver';
import { Sizes } from '@/logic/types/sizes';

describe('Size', () => {
  it.each([['small'], ['normal'], ['medium'], ['large'], [undefined]])(
    'has size %s',
    (size) => {
      const sizeClass = container.resolve(SizeClassNameResolver);
      const classes = sizeClass.prepareClasses({
        size: size as Sizes,
      });
      expect(classNames(classes)).toEqual(size ? `is-${size}` : '');
    },
  );
});
