export const ArrayOfSizes = ['small', 'normal', 'medium', 'large'] as const;

export type Sizes = (typeof ArrayOfSizes)[number];

export const ArrayOfHeadingSizes = [1, 2, 3, 4, 5, 6] as const;

export type HeadingSizes = (typeof ArrayOfHeadingSizes)[number];
