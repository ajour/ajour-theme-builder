import { writable } from 'svelte/store'

export const defaultTheme: Theme = {
  name: 'Dark',
  palette: {
    base: {
      background: '#111111',
      foreground: '#1C1C1C',
    },
    normal: {
      primary: '#3f2b56',
      secondary: '#4a3c1c',
      surface: '#828282',
      error: '#992B2B',
    },
    bright: {
      primary: '#BA84FC',
      secondary: '#ffd03c',
      surface: '#E0E0E0',
      error: '#C13047',
    },
  },
}

export const theme = writable(defaultTheme)

export interface Theme {
  name: string
  palette: ColorPalette
}

export interface ColorPalette {
  base: BaseColors
  normal: Colors
  bright: Colors
}

export interface BaseColors {
  background: string
  foreground: string
}

export interface Colors {
  primary: string
  secondary: string
  surface: string
  error: string
}
