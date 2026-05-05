export interface Rounded {
  rounded?: boolean;
}

export interface IsRounded {
  isRounded?: boolean;
}

export interface Style extends Rounded {
  outlined?: boolean;
  inverted?: boolean;
  static?: boolean;
}
