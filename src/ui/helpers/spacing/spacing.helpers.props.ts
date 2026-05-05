export const arraySpacing = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    'auto',
    0,
    1,
    2,
    3,
    4,
    5,
    6,
] as const;


export type SpacingHelper = (typeof arraySpacing)[number];

export interface SpacingHelperProps {
    margin?: SpacingHelper;
    marginTop?: SpacingHelper;
    marginBottom?: SpacingHelper;
    marginLeft?: SpacingHelper;
    marginRight?: SpacingHelper;
    marginX?: SpacingHelper;
    marginY?: SpacingHelper;
    padding?: SpacingHelper;
    paddingTop?: SpacingHelper;
    paddingBottom?: SpacingHelper;
    paddingLeft?: SpacingHelper;
    paddingRight?: SpacingHelper;
    paddingX?: SpacingHelper;
    paddingY?: SpacingHelper;
    m?: SpacingHelper;
    mt?: SpacingHelper;
    mb?: SpacingHelper;
    ml?: SpacingHelper;
    mr?: SpacingHelper;
    my?: SpacingHelper;
    mx?: SpacingHelper;
    p?: SpacingHelper;
    pt?: SpacingHelper;
    pb?: SpacingHelper;
    pl?: SpacingHelper;
    pr?: SpacingHelper;
    py?: SpacingHelper;
    px?: SpacingHelper;
}
