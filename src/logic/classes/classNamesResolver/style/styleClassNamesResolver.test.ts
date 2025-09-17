import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import classNames from 'classnames';
import { StyleClassNameResolver } from './styleClassNamesResolver';

const styleClass = container.resolve(StyleClassNameResolver);
describe('Styles', () => {
  it.each([[true], [false], [undefined]])(
    'has inverted class %s',
    (inverted) => {
      const classes = styleClass.prepareClasses({
        inverted,
      });
      expect(classNames(classes)).toEqual(inverted ? 'is-inverted' : '');
    },
  );
  it.each([[true], [false], [undefined]])(
    'has outlined class %s',
    (outlined) => {
      const classes = styleClass.prepareClasses({
        outlined,
      });
      expect(classNames(classes)).toEqual(outlined ? 'is-outlined' : '');
    },
  );
  it.each([[true], [false], [undefined]])('has rounded class %s', (rounded) => {
    const classes = styleClass.prepareClasses({
      rounded,
    });
    expect(classNames(classes)).toEqual(rounded ? 'is-rounded' : '');
  });
});
