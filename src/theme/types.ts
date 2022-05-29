import {themeColors} from './colors';
import {ObjectValues} from '../utils/types';

export type ColorValue = ObjectValues<typeof themeColors>;

export type ColorTheme = {
  primary: ColorValue;
  divider: ColorValue;
  background: ColorValue;
  text: ColorValue;
  textSecondary: ColorValue;
};

export type Theme = {
  id: string;
  colors: ColorTheme;
};

export type ProvidedValue = {
  theme: Theme;
  toggleTheme: (theme: string) => void;
};
