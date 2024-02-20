import { rgba } from 'polished'
import type { ColorPalette } from '@search-types/color-palette'
import type { Theme } from '@search-types/theme'

const colors: ColorPalette = {
  primary: '#d9e0e8',
  secondary: '#6c757d',
  mainText: '#eaeaea',
  mainText1: '#9e9e9e',
  mainText2: '#d9e0e8',
  borderDark: '#2c3035',
  borderLight: '#d9e0e8',
  background: '#3a3f45',
  background1: '#2c3035',
  background2: '#40454d',
  white: '#ffffff',
  error: '#ca0f1c',
  error1: '#fdf5f6',
  warning: '#ff9500',
  success: '#3da00f',
  transparent: 'transparent',
}

export const defaultTheme: Theme = {
  name: 'defaultTheme',
  primaryColor: colors.mainText,
  secondaryColor: colors.mainText1,
  btnBackground: colors.primary,
  btnBackgroundHover: rgba(colors.primary, 0.14),
  colors,
}
