import React, {FC, memo, useCallback, useMemo, useState} from 'react';
import {ProvidedValue, Theme} from './types';
import {DEFAULT_THEME} from './default.theme';
import {ThemeContext} from './context';

interface Props {
  initial?: Theme;
}

const ThemeProvider: FC<Props> = ({children, initial = DEFAULT_THEME}) => {
  const [theme] = useState<Theme>(initial);
  const ToggleThemeCallback = useCallback(() => {
    //change theme in this place
  }, []);

  const MemoizedValue = useMemo(() => {
    const value: ProvidedValue = {
      theme,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [theme, ToggleThemeCallback]);

  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default memo(ThemeProvider);
