import { Display } from '@/logic/types/display';

export const getDisplay = <T>(
  value?: T | Display<T>,
  name?: string,
  useName?: boolean,
  preffix = 'is-',
  suffix = '',
) => {
  if (typeof value === 'string') {
    return { [`${preffix}${value}${suffix}`]: !!value };
  }
  if (typeof value === 'boolean') {
    return { [`${preffix}${name}${suffix}`]: !!value };
  }
  return {
    [`${preffix}${
      useName ? name : (value as Display<T>)?.mobile
    }${suffix}-mobile`]: !!(value as Display<T>)?.mobile,
    [`${preffix}${
      useName ? name : (value as Display<T>)?.tablet
    }${suffix}-tablet`]: !!(value as Display<T>)?.tablet,
    [`${preffix}${
      useName ? name : (value as Display<T>)?.touch
    }${suffix}-touch`]: !!(value as Display<T>)?.touch,
    [`${preffix}${
      useName ? name : (value as Display<T>)?.desktop
    }${suffix}-desktop`]: !!(value as Display<T>)?.desktop,
    [`${preffix}${
      useName ? name : (value as Display<T>)?.widescreen
    }${suffix}-widescreen`]: !!(value as Display<T>)?.widescreen,
    [`${preffix}${
      useName ? name : (value as Display<T>)?.fullhd
    }${suffix}-fullhd`]: !!(value as Display<T>)?.fullhd,
  };
};
