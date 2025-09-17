import 'reflect-metadata';
import { describe, expect, it } from 'vitest';

import { container } from 'tsyringe';
import { FlexboxHelpers } from './flexbox.helpers';
import {
  AlignContent,
  AlignItems,
  arrayAlignContent,
  arrayAlignItems,
  arrayAlignSelf,
  arrayFlexDirection,
  arrayFlexExpand,
  arrayFlexStartEnd,
  arrayFlexWrap,
  arrayJustifyContent,
  arrayLeftRight,
  arrayStartEnd,
} from './flexbox.helpers.props';
import classNames from 'classnames';
const alignItemsTests = [
  ...arrayFlexStartEnd,
  ...arrayAlignItems,
  ...arrayStartEnd,
] as AlignItems[];
const alignAndJustifyContentTests = [
  ...arrayFlexStartEnd,
  ...arrayStartEnd,
  ...arrayLeftRight,
  ...arrayAlignContent,
  ...arrayJustifyContent,
] as AlignContent[];

const flexBoxhelpers = container.resolve(FlexboxHelpers);
describe('FlexboxHelpers', () => {
  it.each([...arrayFlexStartEnd, ...arrayAlignSelf])(
    'has align self equal to %s',
    (alignSelf) => {
      const classes = flexBoxhelpers.prepareClasses({
        alignSelf,
      });
      expect(classNames(classes)).toEqual(`is-align-self-${alignSelf}`);
    },
  );
  it.each(arrayFlexWrap)('has flex wrap equal to %s', (flexWrap) => {
    const classes = flexBoxhelpers.prepareClasses({
      flexWrap,
    });
    expect(classNames(classes)).toEqual(`is-flex-wrap-${flexWrap}`);
  });
  it.each(arrayFlexDirection)(
    'has flex direction equal to %s',
    (flexDirection) => {
      const classes = flexBoxhelpers.prepareClasses({
        flexDirection,
      });
      expect(classNames(classes)).toEqual(`is-flex-direction-${flexDirection}`);
    },
  );
  it.each(arrayFlexExpand.map((flex) => [flex, flex]))(
    'has shrink equal to %s and grow equal to %s',
    (shrink, grow) => {
      const classes = flexBoxhelpers.prepareClasses({
        shrink,
        grow,
      });
      expect(classNames(classes)).toEqual(
        `is-flex-grow-${grow} is-flex-shrink-${shrink}`,
      );
    },
  );
  it.each(alignItemsTests)('has align item equal to %s', (alignItems) => {
    const classes = flexBoxhelpers.prepareClasses({
      alignItems,
    });
    expect(classNames(classes)).toEqual(`is-align-items-${alignItems}`);
  });
  it.each(
    alignAndJustifyContentTests.map((alignContent) => [
      alignContent,
      alignContent,
    ]),
  )(
    'has align content equal to %s and justify content equal to %s',
    (alignContent, justifyContent) => {
      const classes = flexBoxhelpers.prepareClasses({
        alignContent,
        justifyContent,
      });
      expect(classNames(classes)).toEqual(
        `is-justify-content-${justifyContent} is-align-content-${alignContent}`,
      );
    },
  );
});
