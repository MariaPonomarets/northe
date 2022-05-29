import {createContext} from 'react';
import {ProvidedValue} from './types';
import {DEFAULT_THEME} from './default.theme';

export const ThemeContext = createContext<ProvidedValue>({
  theme: DEFAULT_THEME,
  toggleTheme: (theme: string) => {
    console.log('ThemeProvider is not rendered!', theme);
  },
});
