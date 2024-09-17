import React, { createContext, useState, useContext, ReactNode } from 'react';
import { customLightTheme, customDarkTheme } from './customTheme';
import { PaperProvider, useTheme } from 'react-native-paper';
import { useAppSelector } from '../../hooks/useAppSelector';
import { switchTheme } from '../../store/themeSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

type ThemeContextType = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const defaultContextValue = {
  toggleTheme: () => {},
  isDarkTheme: false,
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export type AppTheme = typeof customLightTheme;

export const useAppTheme = () => useTheme<AppTheme>();

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const appTheme = useAppSelector(state => state.appTheme.appTheme);
  const dispatch = useAppDispatch();

  const [isDarkTheme, setIsDarkTheme] = useState(appTheme === 'Dark');

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    dispatch(switchTheme(isDarkTheme ? 'Light' : 'Dark'));
  };

  const theme = isDarkTheme ? customDarkTheme : customLightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
