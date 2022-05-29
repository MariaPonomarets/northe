import {ColorTheme, Theme} from './types';
import {themeColors} from './colors';

const DEFAULT_COLOR_THEME: ColorTheme = {
  primary: themeColors.blueBase,
  divider: themeColors.blackLightest,
  background: themeColors.blackLight,
  text: themeColors.blackBase,
  textSecondary: themeColors.blackLight,
};

export const DEFAULT_THEME: Theme = {
  id: 'default',
  colors: DEFAULT_COLOR_THEME,
};
