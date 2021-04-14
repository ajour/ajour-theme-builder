import type { Theme } from '$lib/theme'

function encodeThemeParam(theme: Theme): string {
  return `theme=${encodeURIComponent(JSON.stringify(theme))}`
}

export function buildThemeUrl(theme: Theme): string {
  const params = encodeThemeParam(theme)

  const location = window.location
  const port = location.port ? `:${location.port}` : ''

  const url = `${location.protocol}//${location.hostname}${port}?${params}`

  return url
}

export function updateThemeUrlParams(theme: Theme): void {
  const params = encodeThemeParam(theme)

  window.history.replaceState('', '', `/?${params}`)
}
