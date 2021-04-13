import { writable } from 'svelte/store'

const defaultTheme: Theme = {
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

// LOL deep copy hack
const theme = writable<Theme>(JSON.parse(JSON.stringify(defaultTheme)))

export { theme, defaultTheme }
export type { Theme }
