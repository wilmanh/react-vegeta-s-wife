import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { HeadingClassNameResolver } from './headingClassNamesResolver';
import { HeadingSizes } from '@/logic/types/sizes';

const headingClass = container.resolve(HeadingClassNameResolver);
describe('Heading', () => {
  it.each([[true], [false], [undefined]])('has spaced %s', (spaced) => {
    const classes = headingClass.prepareClasses({
      spaced,
    });
    expect(classNames(classes)).toEqual(spaced ? 'is-spaced' : '');
  });
  it.each([[1], [2], [3], [4], [5], [6], [undefined]])(
    'has hsize %s',
    (hSize) => {
      const classes = headingClass.prepareClasses({
        hSize: hSize as HeadingSizes,
      });
      expect(classNames(classes)).toEqual(hSize ? `is-${hSize}` : '');
    },
  );
});
