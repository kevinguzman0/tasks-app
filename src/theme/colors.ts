import {warning} from '@src/utilities/logger';

export const palette = {
  white: 'rgb(255, 255, 255)',
  purple: 'rgb(54, 63, 220)',
  grey: 'rgb(241, 242, 249)',
  darkGrey: 'rgb(75, 75, 75)',
  green: '#00C853',
  red: '#FF1744',
  yellow: '#FFD600',
  blue: '#2FD2CF', // Darkened the blue color
  purple2: '#AB38FA', //AB38FA
} as const;

/**
 * Tagged string function that return one color from the color palette by using it name. If no color is found it will throw an error
 * @param name Tagged string with one of the colors in the palette with the format colorGroupShadeNumber or just groupShadeNumber ex. colorAlert500, alert500
 * @returns
 */
export function colors(name: keyof typeof palette) {
  const hasError = !(name in palette);

  if (hasError) {
    warning(
      hasError,
      `Requested color named ${name} was not found on theme palette.`,
    );
    throw new Error(
      `Requested color named ${name} was not found on theme palette.`,
    );
  }

  return palette[name];
}
