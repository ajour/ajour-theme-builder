import { cloneDeep } from 'lodash-es'
import { writable } from 'svelte/store'

const oneDark: Theme = {
  name: 'One Dark',
  palette: {
    base: {
      background: '#282c34',
      foreground: '#2c323c',
    },
    normal: {
      primary: '#385c7c',
      secondary: '#654473',
      surface: '#5b626e',
      error: '#713f47',
    },
    bright: {
      primary: '#61afef',
      secondary: '#c679dd',
      surface: '#a6adba',
      error: '#e06b75',
    },
  },
}

const ferra: Theme = {
  name: 'Ferra',
  palette: {
    base: {
      background: '#211f22',
      foreground: '#2b292d',
    },
    normal: {
      primary: '#664A50',
      secondary: '#855859',
      surface: '#816961',
      error: '#713f47',
    },
    bright: {
      primary: '#b4838d',
      secondary: '#e5989b',
      surface: '#fecdb2',
      error: '#e06b75',
    },
  },
}

const sort: Theme = {
  name: 'Sort',
  palette: {
    base: {
      background: '#000000',
      foreground: '#101010',
    },
    normal: {
      primary: '#525252',
      secondary: '#525252',
      surface: '#525252',
      error: '#525252',
    },
    bright: {
      primary: '#A3A3A3',
      secondary: '#A3A3A3',
      surface: '#A3A3A3',
      error: '#A3A3A3',
    },
  },
}

const solarizedLight: Theme = {
  name: 'Solarized Light',
  palette: {
    base: {
      background: '#fdf6e3',
      foreground: '#eee8d5',
    },
    normal: {
      primary: '#BCCCC3',
      secondary: '#ccbd9e',
      surface: '#95a3a2',
      error: '#b80f15',
    },
    bright: {
      primary: '#2aa096',
      secondary: '#a37f12',
      surface: '#4C5D63',
      error: '#EE2F36',
    },
  },
}

const solarizedDark: Theme = {
  name: 'Solarized Dark',
  palette: {
    base: {
      background: '#012b36',
      foreground: '#093642',
    },
    normal: {
      primary: '#1A615B',
      secondary: '#523F09',
      surface: '#63797e',
      error: '#b80f15',
    },
    bright: {
      primary: '#2aa096',
      secondary: '#a37f12',
      surface: '#93a1a1',
      error: '#EE2F36',
    },
  },
}

const outrun: Theme = {
  name: 'Outrun',
  palette: {
    base: {
      background: '#0d0821',
      foreground: '#110A2B',
    },
    normal: {
      primary: '#330442',
      secondary: '#6e3e2e',
      surface: '#484e81',
      error: '#671a30',
    },
    bright: {
      primary: '#ff00ff',
      secondary: '#ff963a',
      surface: '#757dc8',
      error: '#db2c3e',
    },
  },
}

const nord: Theme = {
  name: 'Nord',
  palette: {
    base: {
      background: '#2e3440',
      foreground: '#3b4252',
    },
    normal: {
      primary: '#485b60',
      secondary: '#425066',
      surface: '#9196a1',
      error: '#894f5a',
    },
    bright: {
      primary: '#8fbcbb',
      secondary: '#5e81ac',
      surface: '#eceff4',
      error: '#bf616a',
    },
  },
}

const gruvbox: Theme = {
  name: 'Gruvbox',
  palette: {
    base: {
      background: '#282828',
      foreground: '#3c3836',
    },
    normal: {
      primary: '#63612f',
      secondary: '#695133',
      surface: '#928374',
      error: '#81302e',
    },
    bright: {
      primary: '#98971a',
      secondary: '#d79921',
      surface: '#ebdbb2',
      error: '#cc241d',
    },
  },
}

const forestMidnight: Theme = {
  name: 'Forest Night',
  palette: {
    base: {
      background: '#323d43',
      foreground: '#3c474d',
    },
    normal: {
      primary: '#505a60',
      secondary: '#465258',
      surface: '#999f93',
      error: '#74484c',
    },
    bright: {
      primary: '#a7c080',
      secondary: '#83b6af',
      surface: '#d8caac',
      error: '#e68183',
    },
  },
}

const dracula: Theme = {
  name: 'Dracula',
  palette: {
    base: {
      background: '#282a36',
      foreground: '#353746',
    },
    normal: {
      primary: '#483e61',
      secondary: '#386e50',
      surface: '#a2a4a3',
      error: '#A13034',
    },
    bright: {
      primary: '#bd94f9',
      secondary: '#49eb7a',
      surface: '#f4f8f3',
      error: '#ff7ac6',
    },
  },
}

const horde: Theme = {
  name: 'Horde',
  palette: {
    base: {
      background: '#161313',
      foreground: '#211C1C',
    },
    normal: {
      primary: '#331E1F',
      secondary: '#542A18',
      surface: '#5E5B5A',
      error: '#44282a',
    },
    bright: {
      primary: '#953e43',
      secondary: '#e27342',
      surface: '#9B9897',
      error: '#953e43',
    },
  },
}

const alliance: Theme = {
  name: 'Alliance',
  palette: {
    base: {
      background: '#011930',
      foreground: '#022242',
    },
    normal: {
      primary: '#3e3523',
      secondary: '#3e3523',
      surface: '#7F8387',
      error: '#5b3a5e',
    },
    bright: {
      primary: '#ac8a1b',
      secondary: '#ac8a1b',
      surface: '#B4B9BF',
      error: '#953e43',
    },
  },
}

const light: Theme = {
  name: 'Light',
  palette: {
    base: {
      background: '#ffffff',
      foreground: '#F5F5F5',
    },
    normal: {
      primary: '#DFDBFF',
      secondary: '#F9D659',
      surface: '#828282',
      error: '#992B2B',
    },
    bright: {
      primary: '#9580ff',
      secondary: '#EAA326',
      surface: '#000000',
      error: '#C13047',
    },
  },
}

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
  return [
    cloneDeep(dark),
    cloneDeep(light),
    cloneDeep(sort),
    cloneDeep(ayu),
    cloneDeep(alliance),
    cloneDeep(horde),
    cloneDeep(gruvbox),
    cloneDeep(solarizedDark),
    cloneDeep(solarizedLight),
    cloneDeep(ferra),
    cloneDeep(oneDark),
    cloneDeep(forestMidnight),
    cloneDeep(dracula),
    cloneDeep(outrun),
    cloneDeep(nord),
  ].sort((a, b) => a.name.localeCompare(b.name))
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

const resetTheme = (name: string): void => {
  const selected = allThemes().find((theme) => theme.name === name)

  if (selected) {
    theme.set(cloneDeep(selected))
  }
}

export { theme, allThemes, resetTheme }
export type { Theme }
