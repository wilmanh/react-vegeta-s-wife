export const arrayColors = [
    'white',
    'black',
    'light',
    'dark',
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger',
    'black-bis',
    'black-ter',
    'grey-darker',
    'grey-dark',
    'grey',
    'grey-light',
    'grey-lighter',
    'white-ter',
    'white-bis',
    'current',
    'inherit',
] as const;

export const arrayShades = [
    '00',
    '05',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
    '60',
    '65',
    '70',
    '75',
    '80',
    '85',
    '90',
    '95',
    '100',
    "light",
    "dark",
    "soft",
    "bold",
    "on-scheme"
] as const;

export type ColorHelper = (typeof arrayColors)[number];
export type ShadeHelper = (typeof arrayShades)[number];

export interface ColorHelperProps {
    textColor?: ColorHelper;
    backgroundColor?: ColorHelper;
    shade?: ShadeHelper;
}
