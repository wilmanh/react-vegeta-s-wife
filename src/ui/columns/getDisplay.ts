import { Display } from '@/logic/types/display';

export const getDisplay = <T>(
  value?: T | Display<T>,
  name?: string,
  useName?: boolean,
) => {
  if (typeof value === 'string') {
    return { [`is-${value}`]: !!value };
  }
  if (typeof value === 'boolean') {
    return { [`is-${name}`]: !!value };
  }
  return {
    [`is-${useName ? name : (value as Display<T>)?.mobile}-mobile`]: !!(
      value as Display<T>
    )?.mobile,
    [`is-${useName ? name : (value as Display<T>)?.tablet}-tablet`]: !!(
      value as Display<T>
    )?.tablet,
    [`is-${useName ? name : (value as Display<T>)?.touch}-touch`]: !!(
      value as Display<T>
    )?.touch,
    [`is-${useName ? name : (value as Display<T>)?.desktop}-desktop`]: !!(
      value as Display<T>
    )?.desktop,
    [`is-${useName ? name : (value as Display<T>)?.widescreen}-widescreen`]: !!(
      value as Display<T>
    )?.widescreen,
    [`is-${useName ? name : (value as Display<T>)?.fullhd}-fullhd`]: !!(
      value as Display<T>
    )?.fullhd,
  };
};
