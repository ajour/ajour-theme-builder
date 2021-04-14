import { cloneDeep } from 'lodash-es'
import { writable } from 'svelte/store'

const ayu: Theme = {
  name: 'Ayu',
  palette: {
    base: {
      background: '#1f2430',
      foreground: '#232834',
    },
    normal: {
      primary: '#987a47',
      secondary: '#315e6b',
      surface: '#60697a',
      error: '#712a34',
    },
    bright: {
      primary: '#ffcc66',
      secondary: '#5ccfe6',
      surface: '#cbccc6',
      error: '#ff3333',
    },
  },
}

const dark: Theme = {
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

const allThemes = (): Theme[] => {
  return [cloneDeep(dark), cloneDeep(ayu)]
}

interface Theme {
  name: string
  palette: ColorPalette
}

interface ColorPalette {
  base: BaseColors
  normal: Colors
  bright: Colors
}

interface BaseColors {
  background: string
  foreground: string
}

interface Colors {
  primary: string
  secondary: string
  surface: string
  error: string
}

const theme = writable<Theme>(cloneDeep(dark))

const resetTheme = (): void => {
  theme.set(dark)
}

export { theme, allThemes, resetTheme }
export type { Theme }
