import { Helpers } from '../interfaces/props/helpers';

const helperPropNames = [
  'backgroundColor',
  'backgroundShade',
  'textColor',
  'backgroundInverted',
  'textInverted',
  'textShade',
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'alignContent',
  'alignItems',
  'alignSelf',
  'grow',
  'shrink',
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginX',
  'marginY',
  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingX',
  'paddingY',
  'm',
  'mt',
  'mb',
  'ml',
  'mr',
  'my',
  'mx',
  'p',
  'pt',
  'pb',
  'pl',
  'pr',
  'py',
  'px',
  'fontSize',
  'textAlignment',
  'textTransformation',
  'textWeight',
  'fontFamily',
  'invisible',
  'isHidden',
  'onlyScreenReader',
  'isShow',
  'clearfix',
  'pulledLeft',
  'pulledRight',
  'overlay',
  'clipped',
  'radiusless',
  'shadowless',
  'unselectable',
  'clickable',
  'relative',
] as const satisfies readonly (keyof Helpers)[];

type HelperPropName = (typeof helperPropNames)[number];

export const splitHelperElementProps = <T extends object>(props: T) => {
  const helperProps = {} as Partial<Helpers>;
  const domProps = { ...props } as Record<string, unknown>;
  helperPropNames.forEach((key) => {
    if (key in domProps) {
      (helperProps as Record<string, unknown>)[key] = domProps[key];
      delete domProps[key];
    }
  });

  return { helperProps, domProps: domProps as Omit<T, HelperPropName> };
};
