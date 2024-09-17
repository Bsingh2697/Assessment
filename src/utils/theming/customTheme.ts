import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

export const customLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#000000', // Black
    secondary: '#ffffff',
    theme_blue:'#3361BA',
    theme_green:'#34A653',
    theme_yellow_shade:'#fbf5e4',
    theme_dark_gray:'#151313',
    accent: '#cccccc', // Light Grey
    background: '#ffffff', // White
    surface: '#f6f6f6', // White
    text: '#000000', // Black
    onSurface: '#000000', // Black
    placeholder: '#909090', // Grey
    border: '#F0F0F0',
    theme_white: '#ffffff',
    theme_black: '#000000',
  },
  // Bold: 700
  // Medium: 500
  // Regular: 400
  // Light: 300
  // Thin: 100
  fonts: {
    ...MD3LightTheme.fonts,
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: '700' as const,
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: '500' as const,
    },
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: '400' as const,
    },
    light: {
      fontFamily: 'Roboto-Light',
      fontWeight: '300' as const,
    },
    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: '100' as const,
    },
  },
  elevation: {
    level0: 'transparent',
    level1: 'rgba(0, 0, 0, 0.05)',
    level2: 'rgba(0, 0, 0, 0.08)',
    level3: 'rgba(0, 0, 0, 0.11)',
    level4: 'rgba(0, 0, 0, 0.12)',
    level5: 'rgba(0, 0, 0, 0.14)',
  },
};

export const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#ffffff', // White
    secondary: '#000000',
    theme_blue:'#3361BA',
    theme_green:'#34A653',
    theme_yellow_shade:'#fbf5e4',
    theme_dark_gray:'#151313',
    accent: '#666666', // Dark Grey
    background: '#000000', // Black
    surface: '#121212', // Very Dark Grey
    text: '#ffffff', // White
    onSurface: '#ffffff', // White
    placeholder: '#888888', // Medium Grey
    border: '#E5E4E2',
    theme_white: '#ffffff',
    theme_black: '#000000',
  },
  // Bold: 700
  // Medium: 500
  // Regular: 400
  // Light: 300
  // Thin: 100
  fonts: {
    ...MD3DarkTheme.fonts,
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: '700' as const,
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: '500' as const,
    },
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: '400' as const,
    },
    light: {
      fontFamily: 'Roboto-Light',
      fontWeight: '300' as const,
    },
    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: '100' as const,
    },
  },
  elevation: {
    level0: 'transparent',
    level1: 'rgba(255, 255, 255, 0.05)',
    level2: 'rgba(255, 255, 255, 0.08)',
    level3: 'rgba(255, 255, 255, 0.11)',
    level4: 'rgba(255, 255, 255, 0.12)',
    level5: 'rgba(255, 255, 255, 0.14)',
  },
};
